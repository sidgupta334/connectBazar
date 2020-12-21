import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.page.html',
  styleUrls: ['./order-placed.page.scss'],
})
export class OrderPlacedPage implements OnInit {
  id: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      console.log(this.id);
    })
  }

}
