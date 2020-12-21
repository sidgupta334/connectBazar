import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, LoadingController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniversalapiService } from '../universalapi.service';


import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { CommomService } from '../commom.service';
import { Router } from '@angular/router';

declare var google;


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  AddressForm: FormGroup;
  checkValid = false;
  editAddress: any;
  showAddForm: boolean = true;
  showEditForm: boolean;

  mapButton: boolean = true;

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;
  latitude: any;
  longitude: any;
  title: any;
  address1: any;
  address2: any;
  addressTitle: any;
  mobile: any;
  city: any;
  country: any;
  pincode: any;
  state: any;
  addressId: any;
  showMap = false;
  selecAddress: any;

  constructor(public viewCtrl: ModalController, private formBuilder: FormBuilder,
              private api: UniversalapiService,
              private geolocation: Geolocation,
              private loadingController: LoadingController,
              private alert: CommomService,
              private router: Router,
              navParams: NavParams,
              private nativeGeocoder: NativeGeocoder) {

                this.editAddress = navParams.get('item');
                this.selecAddress = navParams.get('selector');
                if (this.editAddress) {
                  this.editTheAddress(this.editAddress);
                }
                console.log(this.editAddress);
              }

  ngOnInit() {

    this.AddressForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      mobile: ['', [Validators.pattern(/^[6-9]\d{9}$/)]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]],
      state: ['', [Validators.required]],
    });
  }

  get f() {
    return this.AddressForm.controls;
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }




  loadMap() {
    this.mapButton = false;
    this.showMap = true;
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log('loap map response by getcurrent position ' , resp);

      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('dragend', () => {

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();

        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {

    console.log('getAddressFromCoords ' + lattitude + ' ' + longitude);
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 2
    };
    console.log('Procedding to reverse geo coder')
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        console.log('Inside geo coder')
        console.log('result ',result);

        this.city = result[1].locality;
        this.country = result[1].countryName;
        this.pincode = result[1].postalCode;
        this.state = result[1].administrativeArea;
        
        this.address = '';
        const responseAddress = [];
        for (const [key, value] of Object.entries(result[0])) {
          console.log('valueeee',value);
          if (value.length > 0) {
            responseAddress.push(value);
          }

        }
        responseAddress.reverse();
        for (const value of responseAddress) {
          this.address += value + ', ';
          console.log('response address reverse ', this.address);
        } 
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = 'Address Not Available!';
      });

  }


  async registerAddress(value) {
    this.checkValid = true;
    if (this.AddressForm.invalid){
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    loading.present();

    value.lattitude = JSON.stringify(this.latitude);
    value.longitude = JSON.stringify(this.longitude);
    const p = this.api.registerAddress(value);
    p.subscribe(async res => {
      console.log(res);
      await loading.dismiss();
      console.log('select address'+this.selecAddress);


      if(this.selecAddress == 'CHOOSE') {
        console.log('hello')
        this.router.navigate(['/choose-address']);
        const mes = 'Address Added Succuessfully';
        this.alert.presentToast(mes);
        this.dismiss();
      }
      else {
        this.router.navigate(['/home']);
        const mes = 'Address Added Succuessfully';
        this.alert.presentToast(mes);
        this.dismiss();
      }
   
    },
    async (error) => {
      console.log(error);
      await loading.dismiss();
      console.log(error);
      if (error.status === 400) {
        const mes = 'Invalid Details';
        this.alert.presentToast(mes);
           }
      if (error.status === 401) {
            const mes = 'Unauthorized';
            this.alert.presentToast(mes);
               }

      if (error.status === 500) {
            await loading.dismiss();
            const mes = 'Invalid Details';
            this.alert.presentToast(mes);
      }
    });
  }


  editTheAddress(editAddress) {
    console.log(editAddress);

    this.showAddForm = false;
    this.showEditForm = true;
    this.addressId=editAddress.addressId;
    this.title = editAddress.title;
    this.address1 = editAddress.address1;
    this.address2 = editAddress.address2;
    this.addressTitle = editAddress.addressTitle;
    this.mobile = editAddress.mobile;
    this.city = editAddress.city;
    this.country = editAddress.country;
    this.pincode = editAddress.pincode;
    this.state = editAddress.state;
    this.latitude = editAddress.latitude;
    this.longitude = editAddress.longitude;

  }

  updateAddress(value) {
    value.lattitude = JSON.stringify(this.latitude);
    value.longitude = JSON.stringify(this.longitude);
    value.addressId = this.addressId;
    console.log(value);  
    let p =this.api.updateAddress(value);
    p.subscribe(res => {
      console.log(res);
      const mes = 'Addres Updated Succuessfully';
      this.alert.presentToast(mes);
      this.dismiss();
    },
    error =>{
      console.log(error);
      if(error.status == 500) {
        const mes = 'Please Try again later ';
        this.alert.presentToast(mes);
        this.dismiss();
      }
    } );
  
  }

}
