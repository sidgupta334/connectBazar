import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialSignUpPagePageRoutingModule } from './social-sign-up-routing.module';

import { SocialSignUpPage } from './social-sign-up.page';
import { LoginService } from '../login/login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    SocialSignUpPagePageRoutingModule
  ],
  providers: [LoginService],
  declarations: [SocialSignUpPage]
})
export class SocialSignUpPageModule {}
