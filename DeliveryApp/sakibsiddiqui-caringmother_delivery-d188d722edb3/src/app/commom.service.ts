import { Injectable } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { GooglePage } from './google/google.page';


@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor( 
    public toastController: ToastController, 
    public alertController: AlertController,
    public modalController: ModalController,
    private api: LoginService,
    public router: Router)  { }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
    });
    toast.present();
  }


  async presentAlertConfirm(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: message,
      buttons: [
    , {
          text: 'Okay',
          handler: () => {
            console.log('Okay');
            alert.dismiss(true);
            return false;
          }
        }
      ]
    });
    return alert;
  }


    
  async logout() {
    console.log('logout');
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Want to logout!',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            const p = this.api.logout();
            p.subscribe(res => {
              console.log(res);
              localStorage.removeItem('grocericaVendortoken');
              localStorage.removeItem('userDetail');
              localStorage.removeItem('user');
              window.location.reload();
              this.router.navigate(['/login']);
            });


          }
        }
      ]
    });

    await alert.present();
  }


  async openModal(lattitude,longitude) {
    console.log("hello")
    const modal = await this.modalController.create({
    component: GooglePage,
    componentProps: { lat: lattitude , long: longitude }
    });
    return await modal.present();
   }


}
