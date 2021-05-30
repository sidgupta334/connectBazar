import { Component, OnInit } from '@angular/core';
import { CommomService } from '../commom.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UniversalapiService } from '../universalapi.service';
import {
  LaunchNavigator,
  LaunchNavigatorOptions,
} from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoderOptions,
  NativeGeocoder,
  NativeGeocoderResult,
} from '@ionic-native/native-geocoder/ngx';
declare var google;

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  viewOrder: any;
  viewProduct: any;
  id: any;
  latitude: number;
  longitude: number;
  address: string;
  destination: string;

  constructor(
    private common: CommomService,
    private geolocation: Geolocation,
    private api: UniversalapiService,
    private launch: LaunchNavigator,
    private loadingController: LoadingController,
    private router: Router,
    private nativeGeocoder: NativeGeocoder
  ) {}

  ngOnInit() {}

  getProductList() {
    const p = this.api.getOrderVendor(this.id);
    p.subscribe(res => {
      this.viewOrder = res;
      // get the status of cancelled
      if (
        this.viewOrder.orderStatus === 'CANCELLED_COD' ||
        this.viewOrder.orderStatus === 'CANCELLED_ONLINE'
      ) {
        this.viewOrder.orderStatus = 'CANCELLED';
      }

      this.viewOrder.discountReceived =
        this.viewOrder.oldTotal -
        (this.viewOrder.finalTotal + this.viewOrder.discountApplied);

      this.viewOrder.netAmount =
        this.viewOrder.oldTotal - this.viewOrder.discountReceived;
      for (let i = 0; i < this.viewOrder.products.length; i++) {
        // calc total of particular product
        this.viewOrder.products[i].total =
          this.viewOrder.products[i].newPrice *
          this.viewOrder.products[i].quantity;
        // calc the discount on each product
        this.viewOrder.products[i].discount =
          this.viewOrder.products[i].oldPrice *
            this.viewOrder.products[i].quantity -
          this.viewOrder.products[i].total;
        // calc the total discount of product list
        // this.viewOrder.totalDiscount =
        //   this.viewOrder.totalDiscount + this.viewOrder.products[i].discount;
        // this.viewOrder.totalAmount =
        //   this.viewOrder.oldTotal - this.viewOrder.totalDiscount;
      }
    });
  }

  ionViewWillEnter() {
    this.id = JSON.parse(localStorage.getItem('vendorViewCart'));
    this.getProductList();
  }

  async logout() {
    this.common.logout();
  }

  navigate() {
    const options: LaunchNavigatorOptions = {
      // start:  '' + this.latitude + ',' + this.longitude + ',ON' ,
      app: this.launch.APP.MAPS,
    };

    this.launch
      .navigate(
        '' + this.viewOrder.lattitude + ',' + this.viewOrder.longitude + ',ON',
        options
      )
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  orderDelivered(item) {
    const p = this.api.markDelivered(item.orderId);
    p.subscribe(
      res => {
        this.common.presentToast('Order Deliverd');
        this.getProductList();
      },
      error => {
        this.common.presentToast('Something Went Wrong');
      }
    );
  }
}
