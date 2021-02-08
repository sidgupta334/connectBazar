import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ChooseAddressPageRoutingModule } from './choose-address-routing.module';
import { ChooseAddressPage } from './choose-address.page';
import { CommomService } from '../commom.service';
import { UniversalapiService } from '../universalapi.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../cart/cart.service';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { ProfileService } from '../profile/profile.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChooseAddressPageRoutingModule
  ],
  providers: [
    CommomService,
    ProfileService,
    CartService,
    WebIntent,
    DatePipe,
    LocalNotifications,
    UniversalapiService
  ],

  declarations: [ChooseAddressPage]
})
export class ChooseAddressPageModule {}
