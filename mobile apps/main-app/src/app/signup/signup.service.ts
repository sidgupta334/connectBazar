import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import { UniversalapiService } from '../universalapi.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl = UniversalapiService.url;

  constructor(private http: HttpClient) { }


  registerUser(value) {
    console.log(value.user)
    console.log('gender'+value.gender)
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const param = {
  "dob":     value.dob,
  "email":     value.email,
  "fullName":     value.fullName,
  "gender": value.gender,
  "mobile":     value.mobile,
  "password":     value.password,
  "userType": value.user

    };
    return this.http.post<any>(this.baseUrl + '/users/create',
      param, { headers }).pipe(map(res => res));

  }



}
