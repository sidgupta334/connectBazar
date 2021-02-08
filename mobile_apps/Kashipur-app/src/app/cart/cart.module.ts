import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';
import { UniversalapiService } from '../universalapi.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    CartPageRoutingModule
  ],
  providers:[CartService, UniversalapiService],
  declarations: [CartPage]
})
export class CartPageModule {}
