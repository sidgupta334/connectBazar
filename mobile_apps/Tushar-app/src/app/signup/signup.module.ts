import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from "@angular/common/http";
import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { SignupService } from './signup.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    SignupPageRoutingModule
  ],
  providers: [SignupService, DatePicker],

  declarations: [SignupPage]
})
export class SignupPageModule {}
