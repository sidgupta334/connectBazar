import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { HttpClientModule } from '@angular/common/http';
import { UniversalapiService } from '../universalapi.service';
import { HomePage } from '../home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    HttpClientModule
  ],
  providers: [UniversalapiService,HomePage],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
