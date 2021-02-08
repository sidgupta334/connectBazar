import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { error } from 'protractor';
import { CommomService } from '../commom.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-signup',
  templateUrl: './social-sign-up.page.html',
  styleUrls: ['./social-sign-up.page.scss'],
})
export class SocialSignUpPage implements OnInit {
  ActivateForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  constructor(
    private fb: FormBuilder,
    private common: CommomService,
    private api: LoginService,
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.ActivateForm = this.fb.group({
      phone: ['', [Validators.pattern(/^[6-9]\d{9}$/), Validators.required]],
    });
  }
  get f() {
    return this.ActivateForm.controls;
  }

  completeRegistration(value) {
    if (this.ActivateForm.invalid) {
      return;
    }

    const p = this.api.completeRegistration(this.ActivateForm.value.phone);
    p.subscribe(
      res => {
        this.common.presentToast('Your account is activated');
        this.router.navigate(['/home']);
      },
      // tslint:disable-next-line: no-shadowed-variable
      error => {
        this.common.presentToast('Something went wrong, please try again');
        localStorage.removeItem('grocericastart');
        localStorage.removeItem('grocericaemail');
        localStorage.removeItem('user');
        localStorage.removeItem('userDetail');
        localStorage.removeItem('grocericatoken');
        this.router.navigate(['/login']);
      }
    );
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
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
          handler: blah => {},
        },
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['login']);
          },
        },
      ],
    });

    await alert.present();
  }
}
