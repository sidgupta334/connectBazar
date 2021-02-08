import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor( private router : Router,private menu: MenuController) { }

  ngOnInit() {
    this.menu.swipeGesture(false); // to slide menu by swipe

    }
  

}
