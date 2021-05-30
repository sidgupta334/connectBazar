import { Component, OnInit } from "@angular/core";
import { SignupService } from "./signup.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { error } from "protractor";
import { LoadingController } from "@ionic/angular";
import { Router } from '@angular/router';
import { CommomService } from '../commom.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {

  SignUpForm: FormGroup;
  checkValid = false;
  myDate: any;

  constructor(
    private api: SignupService,
    private formBuilder: FormBuilder,
    private alert: CommomService,
    private router: Router,
    private datePicker: DatePicker,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.SignUpForm = this.formBuilder.group({

      dob:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.pattern(/^[6-9]\d{9}$/), Validators.required]],
      password: ['', [Validators.required]],
 
    });
  }

  // getter method to access form fields
  get f() {
    return this.SignUpForm.controls;
  }

  async registerUser(value) {
    value.user = "user";
    
    this.checkValid = true;
    if (this.SignUpForm.invalid) {
      return;
    }
    const p = this.api.registerUser(value);
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    loading.present();

    p.subscribe(async (res) => {
      await loading.dismiss();
      localStorage.setItem('userId',res.userId);
      this.router.navigate(['/activate-otp']);
    },
      // tslint:disable-next-line: no-unused-expression
      async (error: any) => {
        await loading.dismiss();
        if (error.status === 400) {
          await loading.dismiss();
          const mes = 'Invalid Details';
          this.alert.presentToast(mes);


        }
        await loading.dismiss();
        if (error.status === 500 && error.error.message === 'Email already exists') {
          this.alert.presentToast('Email already exists');

        }
    });
  }


  showDatepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      okText:"Save Date",
      todayText:"Set Today"
    }).then(
      date => {
        this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }  
}
