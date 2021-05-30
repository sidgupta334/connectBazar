import { Injectable } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { SearcModalPage } from './searc-modal/searc-modal.page';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor( 
    public toastController: ToastController, 
    private localNotifications: LocalNotifications,
    public alertController: AlertController,
    public modalController: ModalController,)  { }

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
            alert.dismiss(true);
            return false;
          }
        }
      ]
    });
    return alert;
  }



  async openModal() {
    const modal = await this.modalController.create({
    component: SearcModalPage
    });
    return await modal.present();
   }

  async closeModal() {
    
  }

   scheduleNotification(value) {
    this.localNotifications.schedule({
      id: value.orderId,
      title: 'Connect Bazar',
      trigger: { at: new Date(new Date().getTime() + 600)},
      vibrate: true,
      icon: 'res://correct',
      smallIcon: 'res://transicon',
      text: 'Your order with amount ₹'+value[0].finalTotal+ ' is successfully placed',
      data: { secret: value }
    });
  }

}
