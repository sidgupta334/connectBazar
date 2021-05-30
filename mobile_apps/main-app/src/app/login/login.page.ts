import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { ToastController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommomService } from '../commom.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;
  formValidation = false; // to check is form valid
  userData: any;
  signupText: boolean = true;
  socialAccount: any;
  socialMsg: any;
  apiMsg: any

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private api: LoginService,
    private alert: CommomService,
    private statusBar: StatusBar,
    private router: Router,
    private googlePlus: GooglePlus,
    private loadingController: LoadingController,
    private menu: MenuController
  ) {}

  ngOnInit() {
    this.menu.swipeGesture(false); // to slide menu by swipe
    // form credential applying validation
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.removeAllStorageItems();
  }

  removeAllStorageItems() {
    localStorage.removeItem('grocericatoken');
    localStorage.removeItem('userDetail');
    localStorage.removeItem('user');
    localStorage.removeItem('userIdSignUp');
    localStorage.removeItem('grocericastart');
    localStorage.removeItem('grocericaQuantity');
    localStorage.removeItem('grocericaSelectedAddress');
    localStorage.removeItem('grocericaforgotEmail');
    localStorage.removeItem('userId');
    localStorage.removeItem('grocericaProduct');
    localStorage.removeItem('reviewProduct');
    localStorage.removeItem('viewFeedback');
    localStorage.removeItem('grocericaOrderId');
    localStorage.removeItem('grocericaViewCart');
    localStorage.removeItem('grocericaemail');
    localStorage.removeItem('userIdSignUp');
    localStorage.removeItem('cartCount');
  }

  // getter method to access form fields
  get f() {
    return this.LoginForm.controls;
  }

  // ===================Post method for login================//
  async login(value) {
    this.formValidation = true;

    // stop here if form is invalid
    if (this.LoginForm.invalid) {
      return;
    }

    const p = this.api.login(value);

    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();
    p.subscribe(
      async (res: any) => {
        await loading.dismiss();

        localStorage.setItem('grocericatoken', res.token);
        localStorage.setItem('grocericastart', 'starttoken');
        localStorage.setItem('grocericaemail', res.email);
        localStorage.setItem('user', res.fullName);
        localStorage.setItem('userDetail', JSON.stringify(res));
        //  window.location.reload();
        this.router.navigate(['/home']);
      },

      async error => {
        await loading.dismiss();
        // in case when user did not subscribe to activate account adjustResize
        if (error.error.message === 'PENDING') {
          const loading = await this.loadingController.create({
            message: 'Please wait...',
          });
          loading.present();
          const p = this.api.activateAccount(error.error.userId);

          p.subscribe(
            async res => {
              await loading.dismiss();
              this.router.navigate(['/activate-otp']);
            },
            error => {}
          );
        }

        if (error.status === 400) {
          const mes = 'Invalid Details';
          this.alert.presentToast(mes);
        }
      }
    );
  }

  async googleSignIn() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();
    this.googlePlus
      .login({
        scopes: 'profile email phone',
      })
      .then(result => {
        loading.dismiss();
        this.socialAccount = JSON.stringify(result);
        localStorage.setItem('grocericastart', 'starttoken');
        localStorage.setItem('grocericaemail', result.email);
        localStorage.setItem('user', result.displayName);

        // Call Social login API:
        let socialDto = {
          email: result.email,
          fullName: result.displayName,
          userId: result.userId,
        };
        this.api.loginAsSocial(socialDto).subscribe(
          (res: any) => {
            
            localStorage.setItem('grocericatoken', res.token);
            this.router.navigate(['/home']);
          },
          err => {
            if (err.error.message == 'PHONE_REQUIRED') {
              localStorage.setItem('grocericastart', 'starttoken');
              localStorage.setItem('grocericaemail', result.email);
              localStorage.setItem('user', result.displayName);
              localStorage.setItem('grocericatoken', err.error.token);
              this.router.navigate(['/socialSignUp']);
            } else {
              this.alert.presentToast('Unable to login, please try again');
            }
          }
        );
        this.userData = result;
      })

      .catch(err => {
        loading.dismiss();
        this.userData = `Error ${JSON.stringify(err)}`;
        const mes = 'Something went wrong';
        this.alert.presentToast(mes);
      });
  }

  ionViewWillEnter() {
    if (localStorage.getItem('grocericatoken')) {
      this.signupText = false;
    }
  }
}
