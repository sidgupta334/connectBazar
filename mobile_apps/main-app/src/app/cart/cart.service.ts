import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { UniversalapiService } from '../universalapi.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl = UniversalapiService.url;
  constructor(private http: HttpClient, private url : UniversalapiService) { }

  viewCart() {
    var headers = new HttpHeaders();
    if(localStorage.getItem('grocericatoken')) {
      headers = headers.set('token', localStorage.getItem('grocericatoken'));
    } else {
      headers = headers.set('token', '');
    }
    return this.http.get<any>(this.baseUrl+ '/cart/view', {headers}).pipe(map(res => res));
  }

  addToCart(id) {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(UniversalapiService.url + '/cart/add/' + id, {headers}).pipe(map(res => res));
  }

  removeFromCart(id) {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(UniversalapiService.url + '/cart/remove/' + id, {headers}).pipe(map(res => res));
  }

  applyPromoCade(value) {
    console.log(value);
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    let param ={
      "cartId" : value.cartId,
      "couponName" : value.couponName,
      "userId" : value.userId
    }
    return this.http.post<any>(UniversalapiService.url + '/apply/apply', param , {headers}).pipe(map(res => res));

  }


  placeOrder(addressId,finalTotal,safeDelivery,paymentType, couponApplied) {
    console.log(addressId); 
    console.log('payment type in service' +paymentType); 
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));

    let param ={
      "addressId" : addressId,
      "finalTotal" : finalTotal,
      "paymentMethod": paymentType,
     "safeDelivery": safeDelivery,
     "couponApplied": couponApplied
    }
    return this.http.post<any>(UniversalapiService.url + '/order/create', param , {headers}).pipe(delay(3000));

  }

  verifyPincode(pincode) {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(UniversalapiService.url + '/address/pincode/validate/'+pincode , {headers}).pipe(map(res => res ));
  }
}
 