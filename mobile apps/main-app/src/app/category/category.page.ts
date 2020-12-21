import { Component, OnInit } from '@angular/core';
import { UniversalapiService } from '../universalapi.service';
import { Router } from '@angular/router';
import { CommomService } from '../commom.service';
import { CartService } from '../cart/cart.service';
import { error } from 'protractor';
import { LoadingController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { from } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  productList: any; // store list of product
  category: any;
  cart = [];
  proId: any;
  quantity: any;

  discount: number;
  view: any;
  removeCart: any;

  show: boolean ;
  noAuth: string;




  constructor(private homePageApi: UniversalapiService ,
              private api: CartService,
              private router: Router,
              private loadingController: LoadingController,
              private home: HomePage,
              private common: CommomService) { }

  ngOnInit() {
    this.noAuth = localStorage.getItem('grocericatoken');
    let p = this.api.viewCart();p.subscribe(res =>{console.log('responnnse',res);this.quantity=res.netQuantity});



    // ======Check Login Condition ======== //
    if (this.noAuth === null ) {
  console.log('I am nullllll');
  this.show = false;
  console.log(this.quantity);
  }
    if (typeof(this.noAuth) === 'undefined' ) {
    console.log('I am undefined');
    this.show = false;

  }
    if (this.noAuth) {
    this.show = true;
    console.log('i just logged in');
  }
  // ---End----//

    this.viewCart();
    const category = localStorage.getItem('grocericaCategory');
    this.quantity = localStorage.getItem('grocericaQuantity');
    console.log('quantity' + this.quantity);
    this.getProducts(category);
  }

  openModel() { // open model for search
this.common.openModal();
  }


  viewCart() {// method to get cart value
    const a = this.api.viewCart();
    a.subscribe(res => {this.view = res;
                        localStorage.setItem('grocericaQuantity', res.netQuantity);
                        this.quantity = localStorage.getItem('grocericaQuantity');
                        console.log('cart values', this.view);
                        console.log('cart product length' + this.view.products.length); 
                      },
                      error => {

                        if(error.status === 500) {
                          console.log('I am here ')
                          localStorage.setItem('grocericaQuantity', '0');
                        }
                      });
  }



  async getProducts(id) { // method to get the list of product in a sppecific category

    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    loading.present();

    const p = this.homePageApi.getProducts(id);
    p.subscribe(async res => {
      await loading.dismiss();
      this.category = res[0].categoryName;
      console.log('productList', res);
      console.log('product list length' + res.length );
      for (let i = 0 ; i < res.length ; i++) {
      res[i].discountPercentage = Math.round(((res[i].oldPrice - res[i].newPrice) / res[i].oldPrice) * 100) ; // add discount price
      this.productList = res; // store product in productList
      }

      for (let i = 0 ; i < res.length ; i++) {
        this.productList[i].visible = true ; // adding attribute to make Add to cart visible

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

      } },
      async (error) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
          await loading.dismiss();
        }

        if (error.status === 0) {
          this.router.navigate(['/no-internet']);
          await loading.dismiss();
        }
        console.log(error);
        await loading.dismiss();

    });
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
      const p = this.api.removeFromCart(items.productId);
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


