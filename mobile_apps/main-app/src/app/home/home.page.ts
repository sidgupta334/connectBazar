import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { UniversalapiService } from '../universalapi.service';
import { CommomService } from '../commom.service';
import { CartService } from '../cart/cart.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AppComponent } from '../app.component';
import { forkJoin } from 'rxjs';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  bannerImage: any; // store banner object
  categoryDescription: any; // store category information
  allSubCategories: any;
  // Optional parameters to pass to the swiper instance
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };
  quantity: any;
  subCategoriesMapping: any = [];
  homeMsg: any;

  @ViewChild(MatAccordion) accordion: MatAccordion;

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
    this.getApiData();
    this.myapp.ngOnInit();
  }

  openModal() {
    this.commom.openModal();
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  // method to get the category details
  async getApiData() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();
    forkJoin([
      this.cartApi.viewCart(),
      this.homePageApi.getBanner(),
      this.homePageApi.getCategory(),
      this.homePageApi.getAllSubCategories(),
    ]).subscribe(
      async (res: any) => {
        await loading.dismiss();
        this.quantity = res[0].netQuantity;
        localStorage.setItem('grocericaQuantity', res[0].netQuantity);
        this.bannerImage = res[1];
        this.categoryDescription = res[2];
        this.allSubCategories = res[3];
        this.mapSubCategories();
      },
      async error => {
        this.homeMsg = JSON.stringify(error);
        await loading.dismiss();
        if (error.status === 401) {
          localStorage.removeItem('grocericatoken');
          localStorage.removeItem('userDetail');
          localStorage.removeItem('user');
          localStorage.removeItem('userIdSignUp');
          this.router.navigate(['/login']);
        }

        if (error.status === 0) {
          this.router.navigate(['/no-internet']);
        }
      }
    );
  }

  subCategoryList(subCategory) {
    localStorage.setItem('grocericaCategory', subCategory.subCategoryId);
    this.router.navigate(['category']);
  }

  mapSubCategories() {
    this.subCategoriesMapping = this.categoryDescription.map(category => {
      const subCategories = this.allSubCategories.filter(
        sub => sub.categoryId === category.categoryId
      );
      return {
        ...category,
        subCategories,
        isOpened: false,
      };
    });
  }

  toggleAccordion(item) {
    item.isOpened = !item.isOpened;
  }

  ionViewWillEnter() {
    this.quantity = localStorage.getItem('grocericaQuantity');
    this.myapp.ngOnInit();
  }
}
