import { Component, OnInit } from '@angular/core';
import { Platform, MenuController, NavController, IonRouterOutlet, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommomService } from './commom.service';
import {  AlertController } from '@ionic/angular';
import { LoginService } from './login/login.service';
import { NgZone  } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Location } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  show: boolean ;
  user: any;
  noAuth: string;
  noAuthshow: boolean;

  public appPages = [
    { title: 'Main Menu', url: '/home', icon: 'grid' },
    { title: 'My Profile', url: '/profile', icon: 'person' },
    { title: 'Completed Orders', url: '/closed-order', icon: 'copy' },
    { title: 'Logout', url: '/home', icon: 'log-out' },
    { title: 'About Us', url: '/home', icon: 'people' },
  ];

  public appNoAuthPages = [
    { title: 'Main Menu', url: '/home', icon: 'grid' },
    { title: 'Login', url: '/login', icon: 'log-out' },
    { title: 'About Us', url: '/home', icon: 'people' },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alert: AlertController,
    private alertconfirmation: CommomService,
    private api: LoginService,
    private zone: NgZone,
    private network: Network,
    private router: Router,
    private _location: Location,
    private common : CommomService,
    private menu: MenuController,
    private viewCtrl: ModalController

  ) {

    this.initializeApp();
    this.exitApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
          // this.router.navigate(['/category']);

      if (localStorage.getItem('grocericaVendorstart') && localStorage.getItem('grocericaVendortoken')) { // condition for starter page
      this.router.navigate(['/home']);
      } else if (localStorage.getItem('grocericaVendorstart')) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/start']);
      }

      // check the status of network
      window.addEventListener('offline', () => {
         this.router.navigate(['/no-internet']);

        });
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('rgb(171, 95, 233)');
      this.splashScreen.hide();
      this.menu.swipeGesture(false);

    });
  }

  ngOnInit() {
 this.user = localStorage.getItem('user');
 this.noAuth = localStorage.getItem('grocericaVendortoken');
 console.log(this.noAuth);
 console.log(typeof(this.noAuth));

 if (this.noAuth === null ) {
  console.log('I am nullllll');
  localStorage.setItem('grocericaQuantity', '0');
  this.show = false;
  this.noAuthshow = true;
  }
 if (typeof(this.noAuth) === 'undefined' ) {
    console.log('I am undefined');
    localStorage.setItem('grocericaQuantity', '0');
    this.show = false;
    this.noAuthshow = true;

  }
 if (this.noAuth) {
    this.show = true;
    this.noAuthshow = false;
    console.log('i just logged in');
  }
  }

  toggle(i) {
    console.log(i);
    if (i == 'Logout') {
        this.logout();
    }


  }


  async logout() {
    console.log('logout');
    this.common.logout();
  }


  exitApp() {
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/home') && (localStorage.getItem('googlemap') === 'map') ) {
        this.viewCtrl.dismiss();
        localStorage.removeItem('googlemap');
    
      } else if(this._location.isCurrentPathEqualTo('/home')) {
        this.showExitConfirm();
        processNextHandler();
      } 
      else {

        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();

      }

    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alert.getTop().then(r => {
        if (r) {
          console.log(r);
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });
  }



  showExitConfirm() {
    this.alert.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }
}
