import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { CommomService } from '../commom.service';
import { UniversalapiService } from '../universalapi.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.page.html',
  styleUrls: ['./manage-address.page.scss'],
})
export class ManageAddressPage implements OnInit {
  quantity: any;
  address: any;
  editAddress: any;
  chooseAddress: boolean;

  constructor(
    public modalController: ModalController,
    private common: CommomService,
    private api: UniversalapiService,
    public alertController: AlertController,
    private router: Router,
    private cartservice: CartService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.quantity = localStorage.getItem('grocericaQuantity');
    this.getAddress();
  }

  openSearchModal() {
    this.common.openModal();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
    });
    modal.onDidDismiss().then(data => {
      this.getAddress();
    });
    return await modal.present();
  }

  async openEditModal(item) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { item: item },
    });

    modal.onDidDismiss().then(data => {
      this.getAddress();
    });

    return await modal.present();
  }

  getAddress() {
    let p = this.api.getAddress();
    p.subscribe(
      res => {
        if (!res.length) {
          this.chooseAddress = true;
        } else {
          this.chooseAddress = false;
        }
        this.address = res;
      },
      err => {
        if (err.status === 401) {
          this.common.presentToast('Session expired, please login again');
          this.router.navigate(['/login']);
        }
      }
    );
  }

  deleteAddress(id) {
    this.presentAlertConfirm(id);
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Delete Address',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {},
        },
        {
          text: 'Okay',
          handler: () => {
            let p = this.api.deleteAddress(id);
            p.subscribe(
              res => {
                this.common.presentToast(res.message);
                this.getAddress();
              },
              error => {
                if (error.status === 401) {
                  this.common.presentToast(error.error.message);
                }
                if (error.status === 500) {
                  this.common.presentToast('Something Went Wrong');
                }
              }
            );
          },
        },
      ],
    });

    await alert.present();
  }
}
