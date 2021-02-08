import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ViewfeedbackPageRoutingModule } from './viewfeedback-routing.module';
import { ViewfeedbackPage } from './viewfeedback.page';
import { StarRatingModule } from 'ionic5-star-rating';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    ViewfeedbackPageRoutingModule
  ],
  declarations: [ViewfeedbackPage]
})
export class ViewfeedbackPageModule {}
