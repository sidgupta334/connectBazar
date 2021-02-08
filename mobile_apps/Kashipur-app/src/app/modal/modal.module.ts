import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { HttpClientModule } from '@angular/common/http';
import { UniversalapiService } from '../universalapi.service';
import { CommomService } from '../commom.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule, 
    HttpClientModule,
    ModalPageRoutingModule
  ],
  providers: [UniversalapiService,CommomService,Geolocation,NativeGeocoder],
  declarations: [ModalPage]
})
export class ModalPageModule {}
