import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearcModalPage } from '../searc-modal/searc-modal.page';
import { CommomService } from '../commom.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  quantity: string;
  product: any;
  addCartButton = true;
  addedButton: boolean;
  token: string;
  showButton: boolean;
  constructor(
    public modalController: ModalController,
    private common: CommomService,
    private cartApi: CartService
  ) {}

  ngOnInit() {
    this.product = JSON.parse(localStorage.getItem('grocericaProduct'));
    let p = this.cartApi.viewCart();
    p.subscribe(res => {
      this.quantity = res.netQuantity;
    });
    
    this.token = localStorage.getItem('grocericatoken');
    if (this.token == null) {
      this.showButton = true;
      this.addedButton = false;
      this.addCartButton = false;
    }
  }

  openModal() {
    this.common.openModal();
  }

  get getDiscount() {
    const discount = this.product.oldPrice - this.product.newPrice;
    return discount ? Math.round((discount / this.product.oldPrice) * 100) : 0;
  }

  addToCart(product) {
    const a = this.cartApi.addToCart(product.productId);
    a.subscribe(res => {
      this.addedButton = true;
      this.addCartButton = false;
      localStorage.setItem('grocericaQuantity', res.netQuantity);
      this.quantity = localStorage.getItem('grocericaQuantity');
    });
  }
}
