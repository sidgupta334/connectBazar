import {
  Component,
  OnInit,
  ElementRef,
  Input,
  HostListener,
  Directive,
} from '@angular/core';
import {
  ModalController,
  AlertController,
  LoadingController,
  Platform,
} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { CommomService } from '../commom.service';
import { UniversalapiService } from '../universalapi.service';
import { Validators } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { ProfileService } from '../profile/profile.service';
import { DatePipe } from '@angular/common';
import { threadId } from 'worker_threads';
import {
  LocalNotifications,
  ELocalNotificationTriggerUnit,
} from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-choose-address',
  templateUrl: './choose-address.page.html',
  styleUrls: ['./choose-address.page.scss'],
})
export class ChooseAddressPage implements OnInit {
  quantity: any;
  address: any;
  cartValue: any;
  orderQuantity: {};
  orderAddress: any;
  contactLess = false;
  verifyPincode: any;
  userDetail: any;
  todaysDate = new Date();
  convertDate: string;
  checkSelectAddress = false;

  constructor(
    private common: CommomService,
    private cartApi: CartService,
    private api: UniversalapiService,
    private loadingController: LoadingController,
    private router: Router,
    private webIntent: WebIntent,
    private userInfor: ProfileService,
    private datePipe: DatePipe,
    private localNotifications: LocalNotifications,
    private platform: Platform,
    public modalController: ModalController
  ) {
    this.convertDate = this.datePipe.transform(
      this.todaysDate,
      'yyyyMMddHHmmss'
    );

    this.platform.ready().then(() => {
      // Schedule a single notification
      this.localNotifications.on('trigger').subscribe(res => {
      });
    });
  }

  ngOnInit() {
    if (localStorage.getItem('updatedprice')) {
      this.cartValue = localStorage.getItem('updatedprice');
    } else {
      const a = this.cartApi.viewCart();
      a.subscribe(res => {
        this.cartValue = res.netTotal;
      });
    }

    const b = this.userInfor.getUserDetails();
    b.subscribe(res => {
      this.userDetail = res;
    });
  }

  openModel() {
    this.common.openModal();
  }

  ionViewWillEnter() {
    this.quantity = localStorage.getItem('grocericaQuantity');
    this.getAddress();
  }

  getAddress() {
    const p = this.api.getAddress();
    p.subscribe(res => {
      this.address = res;
      for (let i = 0; i < this.address.length; i++) {
        this.address[i].selected = false;
      }
    });
  }

  async openModalPage() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { selector: 'CHOOSE' },
    });

    modal.onDidDismiss().then(data => {
      this.getAddress();
    });
    return await modal.present();
  }

  onSelect(item) {
    for (let i = 0; i < this.address.length; i++) {
      this.address[i].selected = false;

      if (this.address[i].addressId == item.addressId) {
        this.address[i].selected = true;
        this.checkSelectAddress = true;
        localStorage.setItem(
          'grocericaSelectedAddress',
          JSON.stringify(this.address[i])
        );
        const a = JSON.parse(localStorage.getItem('grocericaSelectedAddress'));
        this.orderAddress = a.addressId;
        this.verifyPincode = a;
      }
    }
  }

  verifyEvent(e) {
    this.contactLess = e.detail.checked;
  }

  // -----method to place order ------//

  async verifyPin(paymentType) {
    if (this.checkSelectAddress == false) {
      this.common.presentToast('Please select address to place order');
      return;
    }

    // check the pincode serving area //
    const pin = this.cartApi.verifyPincode(this.verifyPincode.pincode);
    pin.subscribe(
      res => {
        // payment method call based on condition
        if (paymentType == 'COD') {
          this.codOrder('COD');
        } else {
          this.upiOrder('UPI');
        }
      },
      error => {
        if (error.status === 500) {
          this.common.presentToast(
            'Currently we dont accept order in this area'
          );
          return;
        }
      }
    );
  }

  async codOrder(paymentType) {
    if (this.cartValue < 200) {
      this.common.presentToast(' Minimum amount ₹200 is required to continue');
      return;
    }
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    const couponApplied = localStorage.getItem('couponCode');
    const p = this.cartApi.placeOrder(
      this.orderAddress,
      this.cartValue,
      this.contactLess,
      paymentType,
      couponApplied
    );
    loading.present();
    p.subscribe(
      res => {
        localStorage.setItem('grocericaOrderId', res[0].orderId);
        localStorage.removeItem('updatedprice');
        localStorage.removeItem('grocericaCategory');
        localStorage.removeItem('couponCode');
        loading.dismiss();
        const mes = 'Order Successfully Placed';
        this.common.presentToast(mes);
        this.common.scheduleNotification(res);

        this.router.navigate(['/order-placed', res[0].orderId]);
      },
      error => {
        loading.dismiss();
        if (error.status == 500) {
          const mes = 'Please Select Address';
          this.common.presentToast(mes);
        }
        const mes = 'Something went wrong';
        this.common.presentToast(mes);
      }
    );
  }

  upiOrder(paymentType) {
    this.convertDate =
      this.convertDate + this.userDetail.mobile + this.userDetail.userId;
    const options = {
      action: this.webIntent.ACTION_VIEW,
      url:
        'upi://pay?pa=8999090358@ybl&pn=Connect Bazar&tid=' +
        this.convertDate +
        '&tr=orderPayment&am=1&cu=INR&tn=ConnectBazar',
    };
    this.webIntent.startActivityForResult(options).then(
      onSuccess => {
        if (
          onSuccess.extras.Status == 'Success' ||
          onSuccess.extras.Status == 'SUCCESS'
        ) {
          this.codOrder(paymentType);
        }
      },
      onError => {
        alert('error');
      }
    );
  }
}
