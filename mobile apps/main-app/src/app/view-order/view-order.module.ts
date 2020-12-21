import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewOrderPageRoutingModule } from './view-order-routing.module';

import { ViewOrderPage } from './view-order.page';
import { OrderService } from '../all-order/order.service';
import { CommomService } from '../commom.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../cart/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ViewOrderPageRoutingModule
  ],
  providers: [OrderService,CommomService,CartService],
  declarations: [ViewOrderPage]
})
export class ViewOrderPageModule {}
