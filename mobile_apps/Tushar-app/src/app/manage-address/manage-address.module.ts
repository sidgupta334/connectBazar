import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageAddressPageRoutingModule } from './manage-address-routing.module';

import { ManageAddressPage } from './manage-address.page';
import { HttpClientModule } from '@angular/common/http';
import { UniversalapiService } from '../universalapi.service';
import { CartService } from '../cart/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    ManageAddressPageRoutingModule
  ],
  providers:[UniversalapiService,CartService],
  declarations: [ManageAddressPage]
})
export class ManageAddressPageModule {}
