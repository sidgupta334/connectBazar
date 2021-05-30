import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UniversalapiService {
  constructor(private http: HttpClient) {}
  static url = 'https://connect-it-api.herokuapp.com';

  user: any;

  // api to integrate banner
  getBanner() {
    return this.http
      .get<any>(UniversalapiService.url + '/banners/getAll')
      .pipe(map(res => res));
  }

  getCategory() {
    return this.http
      .get<any>(UniversalapiService.url + '/category/getAll')
      .pipe(map(res => res));
  }

  getProducts(id) {
    return this.http
      .get<any>(UniversalapiService.url + '/product/getByCategory/' + id)
      .pipe(delay(200));
  }

  addToCart(id) {
    let headers = new HttpHeaders();
    headers = headers.set(
      'token',
      localStorage.getItem('grocericaVendortoken')
    );
    return this.http
      .get<any>(UniversalapiService.url + '/cart/add/' + id, { headers })
      .pipe(map(res => res));
  }

  getSearch(event) {
    let headers = new HttpHeaders();
    return this.http
      .get<any>(UniversalapiService.url + '/product/search/' + event, {
        headers,
      })
      .pipe(map(res => res));
  }

  getAllProducts() {
    let headers = new HttpHeaders();
    headers = headers.set(
      'token',
      localStorage.getItem('grocericaVendortoken')
    );
    return this.http
      .get<any>(UniversalapiService.url + '/product/getAll', { headers })
      .pipe(map(res => res));
  }

  registerAddress(value) {
    let headers = new HttpHeaders();
    headers = headers.set(
      'token',
      localStorage.getItem('grocericaVendortoken')
    );
   
    const param = {
      address1: value.address1,
      address2: value.address2,
      city: value.city,
      country: value.country,
      lattitude: value.lattitude,
      longitude: value.longitude,
      mobile: value.mobile,
      pincode: value.pincode,
      state: value.state,
      title: value.title,
    };
    return this.http
      .post<any>(UniversalapiService.url + '/address/create', param, {
        headers,
      })
      .pipe(map(res => res));
  }

  updateAddress(value) {
    let headers = new HttpHeaders();
    headers = headers.set(
      'token',
      localStorage.getItem('grocericaVendortoken')
    );
    const param = {
      address1: value.address1,
      address2: value.address2,
      city: value.city,
      country: value.country,
      pincode: value.pincode,
      state: value.state,
      lattitude: value.lattitude,
      longitude: value.longitude,
      title: value.title,
      mobile: value.mobile,
      addressId: value.addressId,
    };
    return this.http
      .post<any>(UniversalapiService.url + '/address/update', param, {
        headers,
      })
      .pipe(map(res => res));
  }

  getAddress() {
    let headers = new HttpHeaders();
    headers = headers.set(
      'token',
      localStorage.getItem('grocericaVendortoken')
    );
    return this.http
      .get<any>(UniversalapiService.url + '/address/get', { headers })
      .pipe(map(res => res));
  }

  deleteAddress(id) {
    let headers = new HttpHeaders();
    headers = headers.set(
      'token',
      localStorage.getItem('grocericaVendortoken')
    );
    return this.http
      .delete<any>(UniversalapiService.url + '/address/delete/' + id, {
        headers,
      })
      .pipe(map(res => res));
  }

  getClosedOrderList() {
    let headers = new HttpHeaders();
    headers = headers.set(
      'token',
      localStorage.getItem('grocericaVendortoken')
    );
    this.user = JSON.parse(localStorage.getItem('userDetail'));
    const id = this.user.userId;
    return this.http
      .get<any>(UniversalapiService.url + '/order/vendor/orders/closed/' + id, {
        headers,
      })
      .pipe(map(res => res));
  }

  getOpenOrderList() {
    let headers = new HttpHeaders();
    headers = headers.set(
      'token',
      localStorage.getItem('grocericaVendortoken')
    );
    this.user = JSON.parse(localStorage.getItem('userDetail'));
    const id = this.user.userId;
    return this.http
      .get<any>(UniversalapiService.url + '/order/vendor/allOrders/' + id, {
        headers,
      })
      .pipe(map(res => res));
  }

  getOrderVendor(id) {
    let headers = new HttpHeaders();
    headers = headers.set(
      'token',
      localStorage.getItem('grocericaVendortoken')
    );
    return this.http
      .get<any>(UniversalapiService.url + '/order/view/' + id, { headers })
      .pipe(map(res => res));
  }

  markDelivered(orderId) {
    let headers = new HttpHeaders();
    headers = headers.set(
      'token',
      localStorage.getItem('grocericaVendortoken')
    );
    return this.http
      .get<any>(UniversalapiService.url + '/order/deliver/' + orderId, {
        headers,
      })
      .pipe(map(res => res));
  }
}
