import { Component, OnInit } from '@angular/core';
import { CommomService } from '../commom.service';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UniversalapiService } from '../universalapi.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  quantity: string;
  productDetails: any;
  feedbackDetails: any;
  ratingForm: FormGroup;
  constructor(private common: CommomService,  private fb: FormBuilder, private api: UniversalapiService ,
              private loadingController: LoadingController,  private router: Router
    ) {
        // form credential applying validation
        this.ratingForm = this.fb.group({
          deliveryFeedback: ['', [Validators.required]],
          itemsFeedback: ['', [Validators.required]],
          feedback: ['', [Validators.required]],
        });
  }

  ngOnInit() {
  }
  openModel() {
    this.common.openModal();
      }

      ionViewWillEnter() {
        this.quantity = localStorage.getItem('grocericaQuantity');
        this.productDetails = JSON.parse(localStorage.getItem('reviewProduct'));

    }

    logDeliveryChange(e) { }

    logOrderChange(e) { }

// method to add the rating
  async ratingFormValue(value) {
console.log(value);
const loading = await this.loadingController.create({
  message: 'Please wait...'
});
loading.present();
const p = this.api.ratingForm(value, this.productDetails.orderId);
p.subscribe(async res => {
  console.log(res);
  await loading.dismiss();
  const mes = 'Your response have been submitted';
  localStorage.setItem('grocericaQuantity', '0');
  this.common.presentToast(mes);
  setTimeout(() => {
      this.router.navigate(['/all-order']);
    }, 3033);
},
  async error => {
  await loading.dismiss();
  console.log(error);
  const mes = 'Something Went Wrong';
  this.common.presentToast(mes);
});
    }

}
