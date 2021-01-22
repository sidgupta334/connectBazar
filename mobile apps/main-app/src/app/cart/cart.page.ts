import { Component, OnInit } from '@angular/core';
import { UniversalapiService } from '../universalapi.service';
import { Router } from '@angular/router';
import { CommomService } from '../commom.service';
import { CartService } from './cart.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  showMsg = false;
  showCart = true;
  checkValid = false;
  showDiscountMoney: boolean;
  cart: any;
  quantity: any;
  total: any;
  Promo: FormGroup;
  couponApplied: boolean;
  couponButton = true;
  withoutCoupon = true;
  oldPrice: any;
  updatedPrice: any;
  couponButtonApplied: boolean;
  token: string;
  p: Promise<void>;
  hasGotResponse: boolean = false;

  cartId: number;
  userId: any;

  constructor(
    private homePageApi: UniversalapiService,
    private router: Router,
    private common: CommomService,
    private formbuilder: FormBuilder,
    private alert: CommomService,
    private loadingController: LoadingController,
    private api: CartService
  ) {}

  ngOnInit() {
      this.Promo = this.formbuilder.group({
      couponName: ['', Validators.required],
    });
  }

  openModel() {
    this.common.openModal();
  }

  async viewCart(resp: any = null) {
    // method to get the list of product in a cart
    if (!resp) {
      const loading = await this.loadingController.create({
        message: 'Please wait...',
      });
      loading.present();

      const p = this.api.viewCart();
      p.subscribe(
        async res => {
          this.hasGotResponse = true;
          await loading.dismiss();
          console.log('CART VALUE', res);
          this.cartId = res.cartId;
          this.quantity = res.netQuantity;

          for (let i = 0; i < res.products.length; i++) {
            // tslint:disable-next-line: max-line-length
            res.products[i].discountPercentage = Math.round(
              ((res.products[i].oldPrice - res.products[i].newPrice) /
                res.products[i].oldPrice) *
                100
            );
            console.log(res.products[i].discountPercentage);
          }
          this.cart = res.products;
          this.total = res.netTotal;
          this.couponApplied = false;
          this.couponButtonApplied = false;
          this.couponButton = true;
          this.withoutCoupon = true;

          if (this.quantity == 0) {
            this.showMsg = true;
            this.showCart = false;
          }
        },
        async error => {
          await loading.dismiss();
          if (error.status == 500) {
            this.showMsg = true;
            this.showCart = false;
            // tslint:disable-next-line: align
          }
          console.log(error);
        }
      );
    } else {
      this.cartId = resp.cartId;
      this.quantity = resp.netQuantity;

      for (let i = 0; i < resp.products.length; i++) {
        // tslint:disable-next-line: max-line-length
        resp.products[i].discountPercentage = Math.round(
          ((resp.products[i].oldPrice - resp.products[i].newPrice) /
            resp.products[i].oldPrice) *
            100
        );
        console.log(resp.products[i].discountPercentage);
      }
      this.cart = resp.products;
      this.total = resp.netTotal;
      this.couponApplied = false;
      this.couponButtonApplied = false;
      this.couponButton = true;
      this.withoutCoupon = true;

      if (this.quantity == 0) {
        this.showMsg = true;
        this.showCart = false;
      }
    }
    this.showCart = true;
  }

  // method to apply promo code
  async applyPromo(value) {
    console.log(value);
    value.cartId = this.cartId;
    this.userId = JSON.parse(localStorage.getItem('userDetail'));
    value.userId = this.userId.userId;
    console.log(this.userId);
    value.amount = this.total;
    this.checkValid = true;
    if (this.Promo.invalid) {
      return;
    }
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();

    const p = this.api.applyPromoCade(value);

    p.subscribe(
      async res => {
        console.log(res);
        this.oldPrice = res.oldPrice;
        this.updatedPrice = res.updatedPrice;
        localStorage.setItem('updatedprice', this.updatedPrice);
        this.couponApplied = true;
        this.couponButtonApplied = true;
        this.withoutCoupon = false;
        this.couponButton = false;
        localStorage.setItem('couponCode', value.couponName);
        await loading.dismiss();
      },
      async error => {
        console.log(error);
        if (error.status == 500) {
          const mes = 'INVALID COUPON';
          this.alert.presentToast(mes);
          await loading.dismiss();
        }
      }
    );
  }

  // method to add product to cart
  async addToCart(items) {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();

    const p = this.api.addToCart(items.productId);
    p.subscribe(async res => {
      await loading.dismiss();
      console.log(res);
      this.viewCart(res);
    });
  }

  // method to remove product from cart
  async removeFromCart(items) {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    loading.present();
    const p = this.api.removeFromCart(items.productId);
    p.subscribe(async res => {
      await loading.dismiss();
      console.log(res);
      this.viewCart(res);
    });
  }

  async ionViewWillEnter() {
    console.log('I am In');
    this.viewCart();
    console.log(this.quantity);
    this.token = localStorage.getItem('grocericatoken');
    console.log(this.token);

    if (this.quantity == 0 && this.token == null) {
      const alert = await this.common.presentAlertConfirm(
        'Login to add product in cart'
      );
      alert.present();
      alert.onDidDismiss().then(data => {
        console.log(data);
        if (data.data === true) {
          this.router.navigate(['/login']);
        }
        if (data.role === 'backdrop') {
          this.common.presentToast('Login to add product in cart');
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3033);
        }
      });
    }
  }
}
