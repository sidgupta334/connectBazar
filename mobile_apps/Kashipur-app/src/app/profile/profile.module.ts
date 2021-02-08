import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { CommomService } from '../commom.service';
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProfilePageRoutingModule
  ],
  providers: [CommomService,
    ProfileService, DatePipe
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
