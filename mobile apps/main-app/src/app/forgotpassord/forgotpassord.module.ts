import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from "@angular/common/http";
import { ForgotpassordPageRoutingModule } from './forgotpassord-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ForgotpassordPage } from './forgotpassord.page';
import { LoginService } from '../login/login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    ForgotpassordPageRoutingModule
  ],
  providers: [LoginService

  ],
  declarations: [ForgotpassordPage]
})
export class ForgotpassordPageModule {}
