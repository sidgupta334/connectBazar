import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { LoginService } from '../login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HomePageRoutingModule
  ],
  providers: [
    LoginService,
    Network
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
