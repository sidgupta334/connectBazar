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

    this.viewCart();

    this.Promo = this.formbuilder.group({
      couponName: ['', Validators.required],
    });
  }


  openModel() {
    this.common.openModal();
  }

  viewCart() {
    // method to get the list of product in a cart
    const p = this.api.viewCart();
    this.showCart = true;
    p.subscribe(
      (res) => {
        console.log('CART VALUE',res);
        this.cartId = res.cartId; 
        this.quantity = res.netQuantity;

        for (let i = 0 ; i < res.products.length ; i++) {
          // tslint:disable-next-line: max-line-length
          res.products[i].discountPercentage = Math.round(((res.products[i].oldPrice - res.products[i].newPrice) / res.products[i].oldPrice) * 100);
          console.log( res.products[i].discountPercentage);
        }
        this.cart = res.products;
        this.total = res.netTotal;
        this.couponApplied = false;
        this.couponButtonApplied = false;
        this.couponButton = true;
        this.withoutCoupon = true;

        if ( this.quantity == 0){
          this.showMsg = true;
          this.showCart = false;
        }
      },
      (error) => {
        if (error.status == 500) {
          this.showMsg = true;
          this.showCart = false;
        // tslint:disable-next-line: align
        }
        console.log(error);
      }
    );
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
      message: 'Please wait...'
    });
    loading.present();

    const p = this.api.applyPromoCade(value);

    p.subscribe(async res => {
      console.log(res);
      this.oldPrice = res.oldPrice;
      this.updatedPrice = res.updatedPrice;
      localStorage.setItem('updatedprice',this.updatedPrice);
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
    });
  }

  // method to add product to cart
  addToCart(items) {
    const p = this.api.addToCart(items.productId);
    p.subscribe( res => {
      console.log(res);
      this.viewCart();
    });
  }


  // method to remove product from cart
  removeFromCart(items) {
    const p = this.api.removeFromCart(items.productId);
    p.subscribe( res => {
      console.log(res);
      this.viewCart();
  });
}

  async ionViewWillEnter() {

  console.log('I am In');
  this.viewCart();
  console.log(this.quantity);
  this.token = localStorage.getItem('grocericatoken');
  console.log(this.token);


  if (this.quantity == 0 && this.token == null) {

    const alert = await this.common.presentAlertConfirm('Login to add product in cart');
    alert.present();
    alert.onDidDismiss().then(data => {
      console.log(data);
      if(data.data === true){
        this.router.navigate(['/login']);
      }
      if(data.role === "backdrop"){

        this.common.presentToast('Login to add product in cart');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3033);
       
      }
    });


  }
}

}
