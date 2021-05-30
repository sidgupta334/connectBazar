import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { error } from 'protractor';
import { CommomService } from '../commom.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-otp',
  templateUrl: './activate-otp.page.html',
  styleUrls: ['./activate-otp.page.scss'],
})
export class ActivateOtpPage implements OnInit {
  ActivateForm: FormGroup;
  validateForm = false;
  // tslint:disable-next-line: max-line-length
  constructor(  private fb: FormBuilder, private common: CommomService, private api: LoginService, 
                public alertController: AlertController,
                private router: Router ) { }

  ngOnInit() {
    this.ActivateForm = this.fb.group({
      otp: ['',[Validators.required]]
    });
  }
  get f() {
    return this.ActivateForm.controls;
  }


  verifyActivateUserOtp(value) {
    this.validateForm= true;

    if(this.ActivateForm.invalid) {
      return;
    }

    const p = this.api.verifyActivateUserOtp(value);
    p.subscribe(res => {
      this.presentAlertConfirm('Account is Activated');


    },
    // tslint:disable-next-line: no-shadowed-variable
    (error) => {
      if (error.error.message ===  'OTP doesn\'t matched' ){
        this.common.presentToast(error.error.message);
      }

      if (error.status === 500) {
        this.common.presentToast('Something Went Wrong!! Try after sometime');

      }
    });
  }


  async presentAlertConfirm(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: message,
      message: 'Login to your Account',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['login']);
          }
        }
      ]
    });

    await alert.present();
  }


}
