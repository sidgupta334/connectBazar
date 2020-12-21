import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
    public commom: CommomService,
    public viewCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.noAuth = localStorage.getItem('grocericatoken');
    this.quantity = localStorage.getItem('grocericaQuantity');
        // ======Check Login Condition ======== //
    if (this.noAuth === null ) {
          console.log('I am nullllll');
          this.show = false; // user not login
          console.log(this.quantity);
          }
    if (this.noAuth) {
            this.show = true; // user is authorized
            console.log('i just logged in');
          }

    this.showSearchText = true;
    this.viewCart();
  }


  searchProducts() {
    _.debounce(() => {
      this.setFilteredItems();
    }, 1500)();
  }

  setFilteredItems() {
    console.log(this.searchTerm);
    const p = this.api.getSearch(this.searchTerm);
    p.subscribe((res) => {

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

      for (let i = 0 ; i < res.length ; i++) {
        res[i].discountPercentage = Math.round(((res[i].oldPrice - res[i].newPrice) / res[i].oldPrice) * 100) ; // add discount price
        this.productList = res; // store product in productList
        }

      for (let i = 0 ; i < this.productList.length ; i++) {
        // tslint:disable-next-line: max-line-length
        this.productList[i].visible = true;
        res[i].discountPercentage = Math.round(((res[i].oldPrice - res[i].newPrice) / res[i].oldPrice) * 100);

        for (let j = 0 ; j < this.view.products.length; j++) {
          // check condition is productID present in both product list and cart

        if (this.productList[i].productId === this.view.products[j].productId) {
            console.log('true');

            this.productList[i].visible = false; // make increment and decrement visible
            this.productList[i].quantity = this.view.products[j].quantity;
            console.log(this.productList);
        }
    }
        console.log(this.productList);

      }
    },
    (error) => {
      this.showNoProduct = false;
      console.log(error);
      console.log(error.url);

      if (error.url === 'http://13.232.166.177:8080/product/search/' && error.status == 0){
        this.showSearchText = true;
        this.hideProduct = false;
      }
    });
  }

  onCancel(event) {
    this.viewCtrl.dismiss();
  }


  viewCart() {
    const a = this.cart.viewCart();
    a.subscribe(res => {this.view = res;
                        localStorage.setItem('grocericaQuantity', res.netQuantity);
                        this.quantity = localStorage.getItem('grocericaQuantity');
                        console.log('cart values', this.view);
                        console.log('cart product length' + this.view.products.length); });
  }


  addToCart(product , index){ // method to add the product to the cart
    const p = this.api.addToCart(product.productId);
    p.subscribe(res => {
      console.log(res);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < res.products.length; i++) {
        console.log('cart list id', res.products[i].productId);
        // tslint:disable-next-line: prefer-for-of
        for ( let j = 0 ; j < this.productList.length; j++ ) {
            if (res.products[i].productId == this.productList[j].productId ) {
              console.log('same id' , res.products[i].productId);
              this.productList[j].visible = false;
              this.productList[j].quantity = res.products[i].quantity;
              this.viewCart();
            }
          }
      }
      console.log(this.productList);

    },
    (error) => {
      console.log(error);
      if (error.status == 500) {
        console.log('helll');
        this.ngOnInit();
      }
    });
  }


      // method to remove product from cart
      removeFromCart(items, index) {
        console.log('items ', items);
        const p = this.cart.removeFromCart(items.productId);
        p.subscribe( res => {
           console.log('cart response ', res);
          // console.log('productList' , this.productList);
           this.removeCart = res; // store cart value
           if (this.removeCart.netQuantity != 0){ // check whether cart had value

            for (let i = 0 ; i < this.removeCart.products.length; i ++) {
              console.log('remove cart length ' + this.removeCart.products.length);
             for (let j = 0 ; j < this.productList.length; j++) {
              console.log('product list length ' + this.productList.length);
                // tslint:disable-next-line: align
                if (this.removeCart.products[i].productId === this.productList[j].productId) {
                  this.productList[j].quantity = this.removeCart.products[i].quantity;
                  console.log(this.productList);
                  this.viewCart();
                }
              // tslint:disable-next-line: max-line-length
              if (this.removeCart.products.some(pro => pro.productId === this.productList[j].productId)){
                console.log('Object found inside the array.');
              } else{
                console.log('Not found ', this.productList[j].productId);
                this.productList[j].visible = true;
                this.viewCart();
              }

              }
            }
          }
           if ( this.removeCart.netQuantity === 0) { // condition when cart gets empty
            console.log('empty');
            this.viewCart();
            this.ngOnInit();
          }



          }, error => {
            console.log(error);
          });
        }


        searchDismiss(event) {
          console.log('hello');
          this.viewCtrl.dismiss();
          this.router.navigate(['/cart']);
        }

        moveWithToast() {
          const msg = 'Login to add product in cart ';
          this.commom.presentToast(msg);

          setTimeout(() => {
            this.viewCtrl.dismiss();
            this.router.navigate(['/login']);
          }, 3033);

        }


  }

