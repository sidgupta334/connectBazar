import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UniversalapiService } from '../universalapi.service';
import { map,delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = UniversalapiService.url;
  constructor(private http: HttpClient, private url: UniversalapiService) { }

  viewOpenOrder() {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(this.baseUrl+ '/order/user/all', {headers}).pipe(map(res => res));
  }

  particularOrder(orderId) {

    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(this.baseUrl+ '/order/view/' +orderId, {headers}).pipe(map(res => res));
  }


  cancelOrder(item) {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    const param = {
      'cancellationReason':'cancel order',
      'orderId' : item.orderId
    }
    return this.http.post<any>(this.baseUrl+ '/order/cancel', param, {headers}).pipe(delay(2000));

  }
}
