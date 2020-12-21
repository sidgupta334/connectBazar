import { Component, OnInit } from '@angular/core';
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
import { GooglePlus } from '@ionic-native/google-plus/ngx';

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
  }

  

  // getter method to access form fields
  get f() {
    return this.LoginForm.controls;
  }

  // ===================Post method for login================//
  async login(value) {
    console.log(value);
    this.formValidation = true;

    // stop here if form is invalid
    if (this.LoginForm.invalid) {
      return;
    }

    const p = this.api.login(value);

    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    loading.present();
    p.subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();

        localStorage.setItem('grocericatoken', res.token);
        localStorage.setItem('grocericastart', 'starttoken');
        localStorage.setItem('grocericaemail', res.email);
        localStorage.setItem('user', res.fullName);
        localStorage.setItem('userDetail', JSON.stringify(res));
     //  window.location.reload();
        this.router.navigate(['/home']);
      },

      async (error) => {
        await loading.dismiss();
        // in case when user did not subscribe to activate account adjustResize
        if (error.error.message === 'PENDING') {
          const loading = await this.loadingController.create({
            message: 'Please wait...'
          });
          loading.present();
          const p = this.api.activateAccount(error.error.userId);

          p.subscribe(
            async (res) => {
              console.log(res);
              await loading.dismiss();
              this.router.navigate(['/activate-otp']);
            },
            (error) => {
              console.log(error);
            }
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
    console.log('hellloooo');
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    loading.present();
    this.googlePlus.login({})
      .then(result => {
        console.log(result) ;
        loading.dismiss();

        localStorage.setItem('grocericatoken', result.accessToken);
        localStorage.setItem('grocericastart', 'starttoken');
        localStorage.setItem('grocericaemail', result.email);
        localStorage.setItem('user', result.givenName);
        this.router.navigate(['/home']);
        this.userData = result;
      })
        
      .catch(err => 
        {
          this.userData = `Error ${JSON.stringify(err)}`
          const mes = 'Something went wrong';
          this.alert.presentToast(mes);
          
        });
  }

  ionViewWillEnter() {
    if(localStorage.getItem('grocericatoken') || localStorage.getItem('userIdSignUp')) {
      this.signupText = false;
    }  
  }

}
