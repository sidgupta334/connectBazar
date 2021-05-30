import { Component, OnInit } from '@angular/core';
import { CommomService } from '../commom.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UniversalapiService } from '../universalapi.service';
@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.page.html',
  styleUrls: ['./viewfeedback.page.scss'],
})
export class ViewfeedbackPage implements OnInit {

  quantity: string;
  feedbackDetails: any;

  constructor(private common: CommomService, private api: UniversalapiService ) { 

  }

  ngOnInit() {
  }
  openModel() {
    this.common.openModal();
      }

      ionViewWillEnter() {
        this.quantity = localStorage.getItem('grocericaQuantity');
        this.feedbackDetails = JSON.parse(localStorage.getItem('viewFeedback'));
        
    }    
}
