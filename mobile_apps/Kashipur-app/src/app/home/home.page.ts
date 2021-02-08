import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import {
  AlertController,
  ModalController,
  LoadingController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from '../login/login.service';
import { Platform } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { UniversalapiService } from '../universalapi.service';
import { error } from '@angular/compiler/src/util';
import { SearcModalPage } from '../searc-modal/searc-modal.page';
import { CommomService } from '../commom.service';
import { Network } from '@ionic-native/network/ngx';
import { CartService } from '../cart/cart.service';
import {
  LocalNotifications,
  ELocalNotificationTriggerUnit,
} from '@ionic-native/local-notifications/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnChanges {
  bannerImage: any; // store banner object
  categoryDescription: any; // store category information
  // Optional parameters to pass to the swiper instance
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };
  quantity: any;
  constructor(
    private router: Router,
    public modalController: ModalController,
    private homePageApi: UniversalapiService,
    private commom: CommomService,
    private cartApi: CartService,
    private loadingController: LoadingController,
    private localNotifications: LocalNotifications,
    public myapp: AppComponent,

    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.localNotifications.on('click').subscribe(res => {
        if (res.data) {
          localStorage.setItem(
            'grocericaViewCart',
            JSON.stringify(res.data.secret)
          );
          this.router.navigate(['/view-order']);
        }
      });
    });
  }

  ngOnInit() {
    this.myapp.ngOnInit();
  }

  ngOnChanges() {}

  openModal() {
    this.commom.openModal();
  }

  viewCart() {
    const a = this.cartApi.viewCart();
    a.subscribe(
      res => {
        this.quantity = res.netQuantity;
        localStorage.setItem('grocericaQuantity', res.netQuantity);
      },

      error => {
        if (error.status === 401) {
          localStorage.removeItem('grocericatoken');
          localStorage.removeItem('userDetail');
          localStorage.removeItem('user');
          localStorage.removeItem('userIdSignUp');
          this.router.navigate(['/login']);
        }
        if (error.status === 500) {
        }
      }
    );
  }

  // api to get the banner details
  async getBanner() {
    const p = this.homePageApi.getBanner();
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();
    p.subscribe(
      async res => {
        this.bannerImage = res;
        await loading.dismiss();
        this.getCategory();
      },
      async error => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
          await loading.dismiss();
        }

        if (error.status === 0) {
          this.router.navigate(['/no-internet']);
          await loading.dismiss();
        }
      }
    );
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  // method to get the category details
  async getCategory() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    const p = this.homePageApi.getCategory();
    p.subscribe(
      res => {
        this.categoryDescription = res;
      },
      async error => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
          await loading.dismiss();
        }

        if (error.status === 0) {
          this.router.navigate(['/no-internet']);
          await loading.dismiss();
        }
      }
    );
  }

  categoryList(category) {
    localStorage.setItem('grocericaCategory', category.categoryId);
    this.router.navigate(['category']);
  }

  ionViewWillEnter() {
    this.quantity = localStorage.getItem('grocericaQuantity');
    this.getBanner();
    this.viewCart();
    this.myapp.ngOnInit();
  }
}
