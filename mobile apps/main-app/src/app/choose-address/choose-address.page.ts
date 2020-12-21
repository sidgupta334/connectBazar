import { Component, OnInit, ElementRef, Input, HostListener, Directive } from '@angular/core';
import { ModalController, AlertController, LoadingController, Platform } from '@ionic/angular';
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
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';


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
    public modalController: ModalController) {


     console.log(this.todaysDate);
     this.convertDate = this.datePipe.transform(this.todaysDate, 'yyyyMMddHHmmss');
     console.log(this.convertDate);

     this.platform.ready().then(() => {
      // Schedule a single notification
  this.localNotifications.on('trigger').subscribe(res => { console.log('trigger', res); });


            });
  }

  ngOnInit() {

    if (localStorage.getItem('updatedprice')) {
      console.log('coupon is applied')
      this.cartValue = localStorage.getItem('updatedprice');
    } else {
      const a = this.cartApi.viewCart();
      a.subscribe(res => { this.cartValue = res.netTotal;
                           console.log(res);
                           console.log('cartvalue', this.cartValue);
                           });
    }
  


    const b = this.userInfor.getUserDetails();
    b.subscribe(res => { this.userDetail = res; console.log('user details' , this.userDetail.mobile); });



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
    p.subscribe((res) => {
      console.log(res);
      this.address = res;
      for (let i = 0; i < this.address.length; i++) {
        this.address[i].selected = false;
      }
    });
  }


  async openModalPage() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { selector: 'CHOOSE' }
    });

    modal.onDidDismiss().then(data => {
      console.log(data);
      this.getAddress();
    });
    return await modal.present();
  }



  onSelect(item) {
    console.log(item);
    for (let i = 0; i < this.address.length; i++) {
      this.address[i].selected = false;

      if (this.address[i].addressId == item.addressId) {
        this.address[i].selected = true;
        this.checkSelectAddress = true;
        localStorage.setItem('grocericaSelectedAddress', JSON.stringify(this.address[i]));
        const a = JSON.parse(localStorage.getItem('grocericaSelectedAddress'));
        console.log('order address' + a.addressId);
        this.orderAddress = a.addressId;
        this.verifyPincode = a;
        console.log('verify PIN', this.verifyPincode.pincode);
      }
    }
  }

  verifyEvent(e) {
    console.log(e);
    this.contactLess = e.detail.checked;
    console.log(this.contactLess);
  }


  // -----method to place order ------//


  async verifyPin(paymentType) {
    console.log('verify pin ' + paymentType);
    if (this.checkSelectAddress == false){
      this.common.presentToast('Please select address to place order');
      return;
    }

    // check the pincode serving area //
    const pin = this.cartApi.verifyPincode(this.verifyPincode.pincode);
    pin.subscribe(res => {
      console.log(res);
      // payment method call based on condition
      if (paymentType == 'COD') {
        this.codOrder('COD');
        console.log('condition' + paymentType);
      } else {
        this.upiOrder('UPI');
      }
    },
      error => {
        console.log(error);
        if (error.status === 500) {
          console.log('i am error');
          this.common.presentToast('Currently we dont accept order in this area');
          return;
        }
      });
    }




    async codOrder(paymentType) {
      console.log('codOrder' + paymentType);
      console.log('order value ' + this.cartValue);
      if(this.cartValue < 200) {
        this.common.presentToast(' Minimum amount ₹200 is required to continue');
        return;
      }
      console.log('order value.more than 2000 ');
      const loading = await this.loadingController.create({
        message: 'Please wait...'
      });
      const couponApplied = localStorage.getItem('couponCode');
      const p = this.cartApi.placeOrder(this.orderAddress, this.cartValue, this.contactLess, paymentType, couponApplied);
      console.log(this.orderAddress);
      loading.present();
      p.subscribe(res => {
      console.log(res);
      console.log('order when placed response',res[0].orderId);
      localStorage.setItem('grocericaOrderId', res[0].orderId);
      localStorage.removeItem('updatedprice');
      localStorage.removeItem('grocericaCategory');
      localStorage.removeItem('couponCode');
      loading.dismiss();
      const mes = 'Order Successfully Placed';
      this.common.presentToast(mes);
      this.common.scheduleNotification(res);
      localStorage.setItem('grocericaQuantity', '0');

      this.router.navigate(['/order-placed',res[0].orderId]);
    },
      error => {
        loading.dismiss();
        if (error.status == 500) {
          const mes = 'Please Select Address';
          this.common.presentToast(mes);
        }
        const mes = 'Something went wrong';
        this.common.presentToast(mes);
        console.log(error);
      });
    }




    upiOrder(paymentType) {
      console.log('upiOrder' + paymentType);
      this.convertDate = this.convertDate + this.userDetail.mobile + this.userDetail.userId;
      console.log(this.convertDate);
      const options = {
        action: this.webIntent.ACTION_VIEW,
        url: 'upi://pay?pa=8999090358@ybl&pn=Connect Bazar&tid=' + this.convertDate + '&tr=orderPayment&am=1&cu=INR&tn=ConnectBazar',
      };
      console.log(options.url);
      this.webIntent.startActivityForResult(options).then(
        onSuccess => {
        console.log(onSuccess);
        if (onSuccess.extras.Status == 'Success' || onSuccess.extras.Status == 'SUCCESS' ) {
          console.log('sending from upi to cod' + paymentType);
          this.codOrder(paymentType);
        }

      },
        onError => {

          console.log(onError); alert('error'); }
      );
    }
  }


