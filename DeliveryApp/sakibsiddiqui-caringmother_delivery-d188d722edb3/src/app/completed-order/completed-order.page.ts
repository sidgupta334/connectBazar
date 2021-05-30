import { Component, OnInit } from '@angular/core';
import { UniversalapiService } from '../universalapi.service';
import { CommomService } from '../commom.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-completed-order',
  templateUrl: './completed-order.page.html',
  styleUrls: ['./completed-order.page.scss'],
})
export class CompletedOrderPage implements OnInit {
  orderList: any; // store order information
  showNoOrder: boolean =false;


  constructor(private router: Router, 
              private homePageApi: UniversalapiService, private commom: CommomService,  
              private loadingController: LoadingController,
              private api: LoginService) { 

  }



  ngOnInit() {
    window.addEventListener('online', () => {
      this.router.navigateByUrl('/no-internet', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/home']);
    }); 
    });
  }


  // method to get the category details
  async getOrderList() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    const p = this.homePageApi.getClosedOrderList();
    p.subscribe(res => {
      this.orderList=res;

    },
    async (error) => {
      await loading.dismiss();
      if(error.status === 401) {
        this.router.navigate(['/login']);
      }

      if(error.status === 400) {
        this.showNoOrder= true;
      }

      if(error.status === 0) {
        this.router.navigate(['/no-internet']);
   
      }
    });
  }



  ionViewWillEnter() {
    this.getOrderList();
  }

viewParticularOrder(item) {
  localStorage.setItem('vendorViewCart',JSON.stringify(item.orderId));
  this.router.navigate(['/order']);
}

async logout() {
  this.commom.logout();
}


}
