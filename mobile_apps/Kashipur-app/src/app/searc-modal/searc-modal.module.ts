import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearcModalPageRoutingModule } from './searc-modal-routing.module';

import { SearcModalPage } from './searc-modal.page';
import { UniversalapiService } from '../universalapi.service';
import { HttpClientModule } from '@angular/common/http';
import { CommomService } from '../commom.service';
import { CartService } from '../cart/cart.service';
import { CategoryPage } from '../category/category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SearcModalPageRoutingModule
  ],
  providers:[UniversalapiService, CommomService ,CartService ,CategoryPage],
  declarations: [SearcModalPage]
})
export class SearcModalPageModule {}
