import { Component, OnInit } from '@angular/core';
import { CommomService } from '../commom.service';
import { OrderService } from '../all-order/order.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UniversalapiService } from '../universalapi.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.page.html',
  styleUrls: ['./view-order.page.scss'],
})
export class ViewOrderPage implements OnInit {
  quantity: string;
  viewOrder: any;
  viewRate = true;
  feedback: any;
  id: string;
  totalvalue = 0;
  isOrderLoaded = false;

  constructor(
    private common: CommomService,
    private orderApi: OrderService,
    private api: UniversalapiService,
    private Activatedroute: ActivatedRoute,
    private cartapi: CartService,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  openSearchModal() {
    // open model for search
    this.common.openModal();
  }

  async ngOnInit() {
    this.quantity = localStorage.getItem('grocericaQuantity');
  }

  particularProductAccess() {
    // call a particular product api call

    if (this.viewOrder.orderStatus === 'COMPLETED') {
      this.getReview(this.viewOrder.orderId);
    }

    for (let i = 0; i < this.viewOrder.products.length; i++) {
      //  calc total of particular product
      this.viewOrder.products[i].total =
        this.viewOrder.products[i].newPrice *
        this.viewOrder.products[i].quantity;
      // calc the discount on each product
      this.totalvalue = this.viewOrder.products[i].total + this.totalvalue;
    }
  }

  // method to cancel the order
  async cancelOrder(item) {

    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    loading.present();
    const p = this.orderApi.cancelOrder(item);
    p.subscribe(
      async res => {
        loading.dismiss();
        localStorage.setItem('grocericaViewCart', JSON.stringify(res));
        const mes = 'Your order is successfully cancelled';
        this.common.presentToast(mes);
        this.router.navigate(['/home']);
      },
      error => {
        loading.dismiss();
        const mes = 'Something Went Wrong';
        this.common.presentToast(mes);
      }
    );
  }

  review(item) {
    localStorage.setItem('reviewProduct', JSON.stringify(item));
    this.router.navigate(['/rating']);
  }

  async getReview(orderId) {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    loading.present();
    
    const p = this.api.getFeedback(orderId);
    p.subscribe(res => {
      loading.dismiss();
      this.feedback = res;
      this.viewRate = false;
    });
  }

  viewFeedback(order) {
    const feedbackOrder = Object.assign(this.feedback, order);
    localStorage.setItem('viewFeedback', JSON.stringify(feedbackOrder));
    this.router.navigate(['/feedback']);
  }

  async ionViewWillEnter() {
    this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    let p = this.orderApi.particularOrder(this.id);
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    loading.present();
    p.subscribe(res => {
      loading.dismiss();
      this.isOrderLoaded = true;
      this.viewOrder = res;
      
      this.viewOrder.discountReceived = this.viewOrder.oldTotal - (this.viewOrder.finalTotal + this.viewOrder.discountApplied - this.viewOrder.serviceCharge);
      
      this.viewOrder.netAmount = this.viewOrder.oldTotal - this.viewOrder.discountReceived;

      
      if (this.viewOrder) {
        this.particularProductAccess();
      }
    }, err => {
      loading.dismiss();
    });
  }

  calculateDiscountReceived(order) {
    return order.oldTotal - (order.finalTotal + order.discountApplied);
  }
}
