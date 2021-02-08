import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllOrderPageRoutingModule } from './all-order-routing.module';

import { AllOrderPage } from './all-order.page';
import { OrderService } from './order.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../cart/cart.service';
import { CommomService } from '../commom.service';
import { UniversalapiService } from '../universalapi.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    AllOrderPageRoutingModule
  ],
  providers:[
    OrderService,
    CartService,
    CommomService,
    UniversalapiService
  ],
  declarations: [AllOrderPage]
})
export class AllOrderPageModule {}
