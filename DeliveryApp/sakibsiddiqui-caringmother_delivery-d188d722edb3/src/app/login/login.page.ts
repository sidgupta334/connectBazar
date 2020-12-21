import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { ToastController } from '@ionic/angular';
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

  constructor(

    private fb: FormBuilder,
    private http: HttpClient,
    private api: LoginService,
    private alert: CommomService,
    private statusBar: StatusBar,
    private router: Router,
    private loadingController: LoadingController,
 
  ) {}

  ngOnInit() {
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

        localStorage.setItem('grocericaVendortoken', res.token);
        localStorage.setItem('grocericaVendorstart', 'starttoken');
        localStorage.setItem('grocericaemail', res.email);
        localStorage.setItem('user', res.fullName);
        localStorage.setItem('userDetail', JSON.stringify(res));
        window.location.reload();
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


}
