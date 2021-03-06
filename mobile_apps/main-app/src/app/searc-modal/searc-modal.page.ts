import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { UniversalapiService } from '../universalapi.service';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
import { CommomService } from '../commom.service';
import _ from 'lodash';

@Component({
  selector: 'app-searc-modal',
  templateUrl: './searc-modal.page.html',
  styleUrls: ['./searc-modal.page.scss'],
})
export class SearcModalPage implements OnInit {
  showNoProduct: boolean;
  showSearchText: boolean;
  quantity: string;
  public searchTerm = '';
  public productList: any;
  hideProduct = true;
  view: any;
  removeCart: any;
  noAuth: any;
  show: boolean;

  constructor(
    private api: UniversalapiService,
    private cart: CartService,
    public viewCtrl: ModalController,
    private router: Router,
    private loadingController: LoadingController,
    private common: CommomService
  ) {}

  ngOnInit() {
    this.noAuth = localStorage.getItem('grocericatoken');
    this.quantity = localStorage.getItem('grocericaQuantity');
    // ======Check Login Condition ======== //
    if (this.noAuth === null) {
      this.show = false; // user not login
    }
    if (this.noAuth) {
      this.show = true; // user is authorized
    }

    this.showSearchText = true;
    this.viewCart();
  }

  searchProducts() {
    this.setFilteredItems();
  }

  particularProduct(product) {
    localStorage.setItem('grocericaProduct', JSON.stringify(product));
    this.viewCtrl.dismiss();
    this.common.closeModal();
    this.router.navigate(['/product']);
  }

  async setFilteredItems() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();
    const p = this.api.getSearch(this.searchTerm);
    p.subscribe(
      async res => {
        await loading.dismiss();
        if (res.length === 0) {
          this.showNoProduct = true;
          this.hideProduct = false;
          this.showSearchText = false;
          this.productList = [];
        } else {
          this.productList = res;
          this.hideProduct = true;
          this.showNoProduct = false;
          this.showSearchText = false;
        }

        for (let i = 0; i < res.length; i++) {
          res[i].discountPercentage = Math.round(
            ((res[i].oldPrice - res[i].newPrice) / res[i].oldPrice) * 100
          ); // add discount price
          this.productList = res; // store product in productList
        }

        for (let i = 0; i < this.productList.length; i++) {
          // tslint:disable-next-line: max-line-length
          this.productList[i].visible = true;
          res[i].discountPercentage = Math.round(
            ((res[i].oldPrice - res[i].newPrice) / res[i].oldPrice) * 100
          );
          if (this.view && this.view?.products) {
            for (let j = 0; j < this.view.products.length; j++) {
              // check condition is productID present in both product list and cart

              if (
                this.productList[i].productId ===
                this.view.products[j].productId
              ) {
                this.productList[i].visible = false; // make increment and decrement visible
                this.productList[i].quantity = this.view.products[j].quantity;
              }
            }
          }
        }
      },
      async error => {
        this.showNoProduct = false;
        await loading.dismiss();

        if (error.status == 0) {
          this.showSearchText = true;
          this.hideProduct = false;
        }
      }
    );
  }

  onCancel(event) {
    this.viewCtrl.dismiss();
  }

  viewCart() {
    this.quantity = localStorage.getItem('grocericaQuantity');
  }

  updateCart(updateType) {
    this.quantity =
      updateType === '+'
        ? (Number(this.quantity) + 1).toString()
        : (Number(this.quantity) - 1).toString();

    localStorage.setItem('grocericaQuantity', this.quantity);
  }

  async addToCart(product, index) {
    // method to add the product to the cart
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();
    const p = this.api.addToCart(product.productId);
    p.subscribe(
      async res => {
        await loading.dismiss();
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < res.products.length; i++) {
          // tslint:disable-next-line: prefer-for-of
          for (let j = 0; j < this.productList.length; j++) {
            if (res.products[i].productId == this.productList[j].productId) {
              this.productList[j].visible = false;
              this.productList[j].quantity = res.products[i].quantity;
            }
          }
        }
        this.updateCart('+');
      },
      async error => {
          await loading.dismiss();
        if (error.status == 500) {
          this.common.presentToast('Unable to add product');
        } else if (error.status === 401) {
          this.common.presentToast('Session expired, please login again');
          this.viewCtrl.dismiss();
          this.router.navigate(['/login']);
        }
      }
    );
  }

  // method to remove product from cart
  async removeFromCart(items, index) {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();
    const p = this.cart.removeFromCart(items.productId);
    p.subscribe(
      async res => {
        await loading.dismiss();
        this.removeCart = res; // store cart value
        if (this.removeCart.netQuantity != 0) {
          // check whether cart had value

          for (let i = 0; i < this.removeCart.products.length; i++) {
            for (let j = 0; j < this.productList.length; j++) {
              // tslint:disable-next-line: align
              if (
                this.removeCart.products[i].productId ===
                this.productList[j].productId
              ) {
                this.productList[j].quantity = this.removeCart.products[
                  i
                ].quantity;
              }
              // tslint:disable-next-line: max-line-length
              if (
                this.removeCart.products.some(
                  pro => pro.productId === this.productList[j].productId
                )
              ) {
              } else {
                this.productList[j].visible = true;
              }
            }
          }
        }
        if (this.removeCart.netQuantity === 0) {
          this.productList.forEach(product => {
            delete product.quantity;
            product.visible = true;
          });
          // condition when cart gets empty
          // this.quantity = 0;
        }
        this.updateCart('-');
      },
      async error => {
        await loading.dismiss();
        this.common.presentToast('Unable to remove product');
      }
    );
  }

  searchDismiss(event) {
    this.viewCtrl.dismiss();
    this.router.navigate(['/cart']);
  }

  moveWithToast() {
    const msg = 'Login to add product in cart ';
    this.common.presentToast(msg);

    setTimeout(() => {
      this.viewCtrl.dismiss();
      this.router.navigate(['/login']);
    }, 3033);
  }
}
