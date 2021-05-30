import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Router } from '@angular/router';
import { CommomService } from '../commom.service';
import { CartService } from '../cart/cart.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.page.html',
  styleUrls: ['./all-order.page.scss'],
})
export class AllOrderPage implements OnInit {
  order: any;
  quantity: string;

  constructor(
    private orderApi: OrderService,
    private router: Router,
    private common: CommomService,
    private cartservice: CartService,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    this.viewOpenOrder();
    this.quantity = localStorage.getItem('grocericaQuantity');
  }

  openSearchModal() {
    // open model for search
    this.common.openModal();
  }

  openModal() {
    this.common.openModal();
  }

  async viewOpenOrder() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    loading.present();
    const p = this.orderApi.viewOpenOrder();
    p.subscribe(
      res => {
        loading.dismiss();
        this.order = res;
        // method to sort in ascending order
        this.order.sort(
          (a, b) => parseFloat(b.orderId) - parseFloat(a.orderId)
        );

        for (let i = 0; i < this.order.length; i++) {
          if (
            this.order[i].orderStatus === 'CANCELLED_COD' ||
            this.order[i].orderStatus === 'CANCELLED_ONLINE'
          ) {
            this.order[i].orderStatus = 'CANCELLED';
          }
        }
      },
      err => {
        if (err.status === 401) {
          this.common.presentToast('Session expired, please login again');
          this.router.navigate(['/login']);
        }
        loading.dismiss();
      }
    );
  }

  doRefresh(event) {
    // refresh function
    this.viewOpenOrder();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
