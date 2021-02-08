import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UniversalapiService } from '../universalapi.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = UniversalapiService.url;
  constructor(private http: HttpClient, private url : UniversalapiService) { }

  getUserDetails() {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    return this.http.get<any>(this.baseUrl+ '/users/me', {headers}).pipe(map(res => res));
  }

  

  updateProfile(value) {
    console.log(value);
    console.log(value.dob);
    console.log(value.email);
    console.log(value.name);
    console.log(value.gender);
    console.log(value.mobile);
    console.log(value.userId);
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericatoken'));
    const param = {
      "dob":    value.dob,
    "email":    value.email,
    "fullName": value.name,
    "gender":   value.gender,
    "mobile":   value.mobile,
    "userId":   value.userId
    }
    
    return this.http.post<any>(this.baseUrl+ '/users/update', param ,{headers} ).pipe(map(res => res));

  }
}
