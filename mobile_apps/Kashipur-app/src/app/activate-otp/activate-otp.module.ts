import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateOtpPageRoutingModule } from './activate-otp-routing.module';

import { ActivateOtpPage } from './activate-otp.page';
import { LoginService } from '../login/login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    ActivateOtpPageRoutingModule
  ],
  providers: [LoginService],
  declarations: [ActivateOtpPage]
})
export class ActivateOtpPageModule {}
