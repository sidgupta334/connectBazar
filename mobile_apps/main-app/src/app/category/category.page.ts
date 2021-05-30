import { Component, OnInit } from '@angular/core';
import { UniversalapiService } from '../universalapi.service';
import { Router } from '@angular/router';
import { CommomService } from '../commom.service';
import { CartService } from '../cart/cart.service';
import { LoadingController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  productList = null; // store list of product
  category: any;
  cart = [];
  proId: any;
  quantity: any;
  emptyList = false;

  discount: number;
  view: any;
  removeCart: any;

  show: boolean;
  noAuth: string;

  constructor(
    private homePageApi: UniversalapiService,
    private api: CartService,
    private router: Router,
    private loadingController: LoadingController,
    private home: HomePage,
    private common: CommomService
  ) {}

  ngOnInit() {
    this.noAuth = localStorage.getItem('grocericatoken');

    // ======Check Login Condition ======== //
    if (this.noAuth === null) {
      this.show = false;
    }
    if (typeof this.noAuth === 'undefined') {
      this.show = false;
    }
    if (this.noAuth) {
      this.show = true;
    }
    // ---End----//

    this.fetchApiData();
    this.quantity = localStorage.getItem('grocericaQuantity');
  }

  openModel() {
    // open model for search
    this.common.openModal();
  }

  updateCart(updateType) {
    this.quantity =
      updateType === '+'
        ? Number(this.quantity) + 1
        : this.quantity == 0
        ? 0
        : Number(this.quantity) - 1;

    localStorage.setItem('grocericaQuantity', this.quantity);
  }

  async fetchApiData() {
    const categoryId = localStorage.getItem('grocericaCategory');
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();
    forkJoin([
      this.api.viewCart(),
      this.homePageApi.getProducts(categoryId),
    ]).subscribe(
      async res => {
        await loading.dismiss();
        this.viewCart(res[0]);
        this.getProducts(res[1]);
      },
      async error => {
        await loading.dismiss();
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

  async viewCart(res) {
    this.view = res;
    localStorage.setItem('grocericaQuantity', res.netQuantity);
    this.quantity = res.netQuantity;
  }

  async getProducts(res) {
    this.emptyList = res.length ? false : true;
    this.category = res.length ? res[0].categoryName : '';
    for (let i = 0; i < res.length; i++) {
      res[i].discountPercentage = Math.round(
        ((res[i].oldPrice - res[i].newPrice) / res[i].oldPrice) * 100
      ); // add discount price
      this.productList = res; // store product in productList
    }

    for (let i = 0; i < res.length; i++) {
      this.productList[i].visible = true; // adding attribute to make Add to cart visible

      if (this.view && this.view?.products) {
        for (let j = 0; j < this.view.products.length; j++) {
          // check condition is productID present in both product list and cart
          if (
            this.productList[i].productId === this.view.products[j].productId
          ) {
            this.productList[i].visible = false; // make increment and decrement visible
            this.productList[i].quantity = this.view.products[j].quantity;
          }
        }
      }
    }
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
        if(error.status === 401) {
           this.common.presentToast('Session expired, please login again');
          this.router.navigate(['/login']);
        }
        this.common.presentToast('Unable to add product');
      }
    );
  }

  // method to remove product from cart
  async removeFromCart(items, index) {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();
    const p = this.api.removeFromCart(items.productId);
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
          this.quantity = 0;
        }
        this.updateCart('-');
      },
      async error => {
        await loading.dismiss();
        this.common.presentToast('Unable to remove product');
      }
    );
  }

  particularProduct(product) {
    localStorage.setItem('grocericaProduct', JSON.stringify(product));
    this.router.navigate(['/product']);
  }

  moveWithToast() {
    const msg = 'Login to add product in cart ';
    this.common.presentToast(msg);

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3033);
  }
}
