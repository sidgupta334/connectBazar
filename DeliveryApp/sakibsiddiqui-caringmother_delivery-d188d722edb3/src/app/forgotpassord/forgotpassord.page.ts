import { Component, OnInit } from "@angular/core";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { LoginService } from "../login/login.service";
import { error } from "protractor";
import { CommomService } from "../commom.service";
import { LoadingController, AlertController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: "app-forgotpassord",
  templateUrl: "./forgotpassord.page.html",
  styleUrls: ["./forgotpassord.page.scss"],
})
export class ForgotpassordPage implements OnInit {
  EmailForm: FormGroup;
  OtpForm: FormGroup;
  checkValid = false;
  otpFormValid = false;


  otpPost = false;
  forgotPassword = true;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private api: LoginService,
    private loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router,
    private alert: CommomService
  ) {}

  ngOnInit() {
    this.EmailForm = this.fb.group({
      Email: ["", [Validators.required, Validators.email]],
    });

    this.OtpForm = this.fb.group({
      otp: ["", [Validators.required]],
      newPassword: ["", [Validators.required]],
    });
  }

  // getter method to access form fields
  get f() {
    return this.EmailForm.controls;
  }

  // getter method to access form fields
  get frmValid() {
    return this.OtpForm.controls;
  }

  route() {
    console.log("hello")
    this.otpPost = false;
    this.forgotPassword = true;
  }

  async getEmail(value) {
    console.log(value.Email);
    this.checkValid = true;
    if (this.EmailForm.invalid) {
      return;
    }
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    loading.present();

    const p = this.api.forgotPassword(value.Email);
    p.subscribe(
      (res) => {
        console.log(res);
        console.log(value);
        localStorage.setItem('grocericaforgotEmail', value.Email);
        loading.dismiss();
        this.alert.presentToast("Otp Sent Successfully to your email");
        this.forgotPassword = false;
        this.otpPost = true;
        this.otpFormValid = false;

      },
      (error) => {
        loading.dismiss();
        console.log(error);
        if (error.error.message === "User not found" && error.status === 400) {
          this.alert.presentToast(error.error.message);
        }
        if (error.status === 500) {
          this.alert.presentToast("Something went wrong");
        }
      }
    );
  }

  // =======form method for otp validation==========//
  async postOtp(value) {
    this.otpFormValid = true;
    if (this.OtpForm.invalid) {
      return;
    }
    value.email=localStorage.getItem('grocericaforgotEmail');
    console.log(value);
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    loading.present();

    const p = this.api.postOtp(value);
    p.subscribe((res) => {
      console.log(res);
      loading.dismiss();
      this.presentAlertConfirm(res.message);
    },
    (error) => {
      console.log(error);
      loading.dismiss();
      if (error.error.message === "User not found" && error.status === 400) {
        this.alert.presentToast(error.error.message);
      }
      if (error.error.message === "OTP doesn't matched" && error.status === 500) {
        this.alert.presentToast(error.error.message);
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
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['login']);
          }
        }
      ]
    });

    await alert.present();
  }

}
