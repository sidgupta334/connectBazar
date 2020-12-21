import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginService } from '../login/login.service';
import { OrderPageRoutingModule } from './order-routing.module';
import { OrderPage } from './order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    OrderPageRoutingModule
  ],
  providers: [LoginService

  ],
  declarations: [OrderPage]
})
export class OrderPageModule {}
