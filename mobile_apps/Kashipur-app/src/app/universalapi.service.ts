import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UniversalapiService {


  static url = 'https://connect-it-api.herokuapp.com';
  // static url = 'https://daily-grocery-api.herokuapp.com';
  // static url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // api to integrate banner
  getBanner() {
    return this.http.get<any>(UniversalapiService.url + '/banners/getAll').pipe(map(res => res));

  }

  getCategory() {
    return this.http.get<any>(UniversalapiService.url + '/category/getAll').pipe(map(res => res));

  }

  getProducts(id) {
    return this.http.get<any>(UniversalapiService.url + '/product/getByCategory/' + id).pipe(delay(200));

  }


  addToCart(id) {

    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(UniversalapiService.url + '/cart/add/' + id, {headers}).pipe(map(res => res));
  }

  getSearch(event) {
    var headers = new HttpHeaders();
    return this.http.get<any>(UniversalapiService.url + '/product/search/' + event, {headers}).pipe(map(res => res));
  }

  getAllProducts() {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(UniversalapiService.url + '/product/getAll', {headers}).pipe(map(res => res));

  }

  registerAddress(value) {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    
    const param = {
      'address1': value.address1,  
      'address2': value.address2,
      'city': value.city,
      'country': value.country,
      'lattitude': value.lattitude,
      'longitude': value.longitude,
      'mobile': value.mobile,
      'pincode': value.pincode,
      'state': value.state,
      'title': value.title
     

    };
    return this.http.post<any>(UniversalapiService.url + '/address/create',
      param, { headers }).pipe(map(res => res));

  }

  updateAddress(value) {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    const param = {
      'address1':     value.address1,
  'address2':     value.address2,
  'city':     value.city,
  'country':     value.country,
  'pincode':     value.pincode,
  'state':     value.state,
  'lattitude': value.lattitude,
  'longitude': value.longitude,
  'title': value.title,
  'mobile':value.mobile,
  'addressId': value.addressId,


    };
    return this.http.post<any>(UniversalapiService.url + '/address/update',
      param, { headers }).pipe(map(res => res));

  }



  getAddress() {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(UniversalapiService.url + '/address/get', {headers}).pipe(map(res => res));
  }


  deleteAddress(id) {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.delete<any>(UniversalapiService.url + '/address/delete/' +id , {headers}).pipe(map(res => res));
  }

  ratingForm(value,orderId) {
    
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));

    const param = {
      'deliveryFeedback': value.deliveryFeedback,
      'feedback': value.feedback,
      'itemsFeedback': value.itemsFeedback,
      'orderId': orderId
    }

    return this.http.post<any>(UniversalapiService.url + '/order/feedback' , param, {headers}).pipe(map(res => res));
  }

   getFeedback(orderId) {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(UniversalapiService.url + '/order/feedback/view/' +orderId , {headers}).pipe(map(res => res)); 
   }

   emptyCart() {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(UniversalapiService.url + '/cart/empty'  , {headers}).pipe(map(res => res)); 
   }

  }

