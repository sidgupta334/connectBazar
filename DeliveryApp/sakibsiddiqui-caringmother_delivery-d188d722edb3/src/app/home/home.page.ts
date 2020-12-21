import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from '../login/login.service';
import { Platform } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { UniversalapiService } from '../universalapi.service';
import { error } from '@angular/compiler/src/util';
import { CommomService } from '../commom.service';
import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  orderList: any; // store order information
  showNoOrder = false;


  constructor(private alert: AlertController, private router: Router, public modalController: ModalController,
              private statusBar: StatusBar,  private homePageApi: UniversalapiService, private commom: CommomService,
              private network: Network,  private loadingController: LoadingController,
              private api: LoginService, private platform: Platform) {

    this.platform = platform;
  }



  ngOnInit() {
    window.addEventListener('online', () => {
      console.log('online');
      this.router.navigateByUrl('/no-internet', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/home']);
    });
    });
  }

  doRefresh(event) { // refresh function
  this.getOrderList();
  console.log('refresh');
  setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


  // method to get the category details
  async getOrderList() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    const p = this.homePageApi.getOpenOrderList();
    p.subscribe(res => {
      console.log(res);
      this.orderList = res;
      //method to sort in ascending order
      this.orderList.sort((a, b) => parseFloat(a.orderId) - parseFloat(b.orderId));
      console.log('sort', this.orderList);

            // get the status of cancelled
      for (let i = 0; i < this.orderList.length; i++) {
        console.log('bye');
        if (this.orderList[i].orderStatus === 'CANCELLED_COD' || this.orderList[i].orderStatus === 'CANCELLED_ONLINE' ) {
           this.orderList[i].orderStatus = 'CANCELLED';
              }
            }


    },
    async (error) => {
      await loading.dismiss();
      if (error.status === 401) {
        this.router.navigate(['/login']);
      }

      if (error.status === 400) {
        this.showNoOrder = true;
      }

      if (error.status === 0) {
        this.router.navigate(['/no-internet']);

      }
      console.log(error);
    });
  }



  ionViewWillEnter() {
    this.getOrderList();
  }

viewParticularOrder(item) {
  console.log(item.orderId);
  localStorage.setItem('vendorViewCart', JSON.stringify(item.orderId));
  this.router.navigate(['/order']);
}

async logout() {
  console.log('logout');
  this.commom.logout();
}


}
