import { Component, OnInit } from '@angular/core';
import { CommomService } from '../commom.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ProfileService } from './profile.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  quantity: string;
  user: any;
  letter: string;
  showProfile = true;
  EditForm: FormGroup;
  checkValid = false;
  editname: any;
  editdob: any;

  constructor(
    private common: CommomService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private loadingController: LoadingController,
    private api: ProfileService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.EditForm = this.formBuilder.group({
      dob: ['', [Validators.required]],
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  get f() {
    return this.EditForm.controls;
  }

  openModel() {
    this.common.openModal();
  }

  getUserDetails() {
    let a = this.api.getUserDetails();
    a.subscribe(res => {
      this.user = res;
      const a = this.user.fullName;
      this.letter = a.slice(0, 1);
      let b = this.datePipe.transform(this.user.dob, 'yyyy-MM-dd');
      this.user.dob = b;
    }, err => {
      if (err.status === 401) {
          this.common.presentToast('Session expired, please login again');
          this.router.navigate(['/login']);
        }
    });
  }

  editProfile() {
    this.showProfile = false;
    this.EditForm.controls.name.setValue(this.user.fullName);
    this.EditForm.controls.dob.setValue(
      this.datePipe.transform(this.user.dob, 'yyyy-MM-dd')
    );
    this.EditForm.controls.gender.setValue(this.user.gender);
  }

  async updateAddress(value) {
    value.userId = this.user.userId;
    value.email = this.user.email;
    value.mobile = this.user.mobile;
    this.checkValid = true;
    if (this.EditForm.invalid) {
      return;
    }
    const loading = await this.loadingController.create({
      message: 'Updating...',
    });
    loading.present();

    const p = this.api.updateProfile(value);
    p.subscribe(
      res => {
        if (res) {
          loading.dismiss();
          this.common.presentToast('Profile is updated');
          this.showProfile = true;
          this.getUserDetails();
        }
      },
      error => {
        loading.dismiss();
        this.common.presentToast('Something went wrong? Try Again');
      }
    );
  }

  ionViewWillEnter() {
    this.quantity = localStorage.getItem('grocericaQuantity');
    this.getUserDetails();
  }
}
