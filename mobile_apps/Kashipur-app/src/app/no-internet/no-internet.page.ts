import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-internet',
  templateUrl: './no-internet.page.html',
  styleUrls: ['./no-internet.page.scss'],
})
export class NoInternetPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
    window.addEventListener('online', () => {
        this.router.navigate(['/home']);
    });

  }

}
