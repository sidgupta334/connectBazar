import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AtomSpinnerModule } from 'angular-epic-spinners';
import { UniversalapiService } from './universalapi.service';
import { CommomService } from './commom.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AtomSpinnerModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UniversalapiService,
    DatePicker,
    LoginService,
    Network,
    CommomService,
    LocationAccuracy,
    Geolocation,
    NativeGeocoder,
    WebIntent,
    GooglePlus,
    LocalNotifications,
    AndroidPermissions,
    MobileAccessibility,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
