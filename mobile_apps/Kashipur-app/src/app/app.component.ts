import { Component, OnInit } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from './login/login.service';
import { NgZone } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Location } from '@angular/common';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  show: boolean;
  user: any;
  noAuth: string;
  noAuthshow: boolean;

  public appPages = [
    { title: 'Main Menu', url: '/home', icon: 'grid' },
    { title: 'My Orders', url: '/all-order', icon: 'receipt' },
    { title: 'Manage Address', url: '/address', icon: 'location' },
    { title: 'My Profile', url: '/profile', icon: 'person' },
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
    private androidPermissions: AndroidPermissions,
    private statusBar: StatusBar,
    private alert: AlertController,
    // private alertconfirmation: CommomService,
    private api: LoginService,
    private zone: NgZone,
    private network: Network,
    private router: Router,
    private _location: Location,
    // private common: CommomService,
    private menu: MenuController,
    private locationAccuracy: LocationAccuracy,
    private mobileAccessibility: MobileAccessibility
  ) {
    this.initializeApp();
    this.exitApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.mobileAccessibility) {
        this.mobileAccessibility.usePreferredTextZoom(false);
      }
      // check gps location permission
      this.androidPermissions
        .checkPermission(
          this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
        )
        .then(
          result => {
            if (result.hasPermission) {
              // If having permission show 'Turn On GPS' dialogue
              this.askToTurnOnGPS();
            } else {
              // If not having permission ask for permission
              this.requestGPSPermission();
            }
          },
          err => {
          }
        );
      // this.router.navigate(['/home']);

      if (
        localStorage.getItem('grocericastart') &&
        localStorage.getItem('grocericatoken')
      ) {
        // condition for starter page
        this.router.navigate(['/home']);
      } else if (localStorage.getItem('grocericastart')) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/start']);
      }

      // hardware gps button
      // this.checkLocation();

      // check the status of network
      window.addEventListener('offline', () => {
        this.router.navigate(['/no-internet']);
      });
      // check the status of network

      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('rgb(171, 95, 233)');
      this.splashScreen.hide();
      this.menu.swipeGesture(true); // to slide menu by swipe
    });
  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.noAuth = localStorage.getItem('grocericatoken');

    
    if (this.noAuth === null) {
      this.show = false;
      this.noAuthshow = true;
      localStorage.setItem('grocericaQuantity', '0');
    }
    if (typeof this.noAuth === 'undefined') {
      this.show = false;
      this.noAuthshow = true;
      localStorage.setItem('grocericaQuantity', '0');
    }
    if (this.noAuth) {
      this.show = true;
      this.noAuthshow = false;
    }
  }

  toggle(i) {
    if (i == 'Logout') {
      this.logout();
    }
  }

  async logout() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Want to logout!',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
          },
        },
        {
          text: 'Okay',
          handler: () => {
            const p = this.api.logout();
            localStorage.removeItem('grocericatoken');
            localStorage.removeItem('userDetail');
            localStorage.removeItem('user');
            localStorage.removeItem('userIdSignUp');
            localStorage.removeItem('grocericastart');
            localStorage.removeItem('grocericaQuantity');
            localStorage.removeItem('grocericaSelectedAddress');
            localStorage.removeItem('grocericaforgotEmail');
            localStorage.removeItem('userId');
            localStorage.removeItem('grocericaProduct');
            localStorage.removeItem('reviewProduct');
            localStorage.removeItem('viewFeedback');
            localStorage.removeItem('grocericaOrderId');
            localStorage.removeItem('grocericaViewCart');
            localStorage.removeItem('grocericaemail');
            localStorage.removeItem('userIdSignUp');
       
            this.router.navigate(['/login']);
            this.ngOnInit();
          },
        },
      ],
    });

    await alert.present();
  }

  exitApp() {
    this.platform.backButton.subscribeWithPriority(10, processNextHandler => {
      if (this._location.isCurrentPathEqualTo('/home')) {
        // Show Exit Alert!
        this.showExitConfirm();
        processNextHandler();
      } else {
        // Navigate to back page
        this._location.back();
      }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      this.alert
        .getTop()
        .then(r => {
          if (r) {
            navigator['app'].exitApp();
          }
        })
        .catch(e => {
        });
    });
  }

  showExitConfirm() {
    this.alert
      .create({
        header: 'App termination',
        message: 'Do you want to close the app?',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Stay',
            role: 'cancel',
            handler: () => {
            },
          },
          {
            text: 'Exit',
            handler: () => {
              navigator['app'].exitApp();
            },
          },
        ],
      })
      .then(alert => {
        alert.present();
      });
  }

  // checkLocation() {

  //   let p = this.diagnostic.isLocationAvailable();
  //   p.then(function (available) {
  //     console.log("Location is " + (available ? "available" : "not available"));
  //   }).catch(function (error) {
  //     console.log("The following error occurred: " + error);
  //   });

  // }

  askToTurnOnGPS() {
    this.locationAccuracy
      .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then(
        () => {
          // When GPS Turned ON call method to get Accurate location coordinates
        },
        error =>
            'Error requesting location permissions ' + JSON.stringify(error)
          )
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
      } else {
        // Show 'GPS Permission Request' dialogue
        this.androidPermissions
          .requestPermission(
            this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
          )
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              // Show alert if user click on 'No Thanks'
            }
          );
      }
    });
  }
}
