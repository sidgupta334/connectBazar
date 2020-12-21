import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import { UniversalapiService } from '../universalapi.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = UniversalapiService.url;
  userId: any;

  constructor(private http: HttpClient) { }


  // api for the user login
  login(value) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let param = {

      email: value.email,
      password: value.password

    };

    return this.http.post<any>(this.baseUrl + '/delivery/users/login',
      param, { headers }).pipe(delay(2000)).pipe(map(res => res));
  }
// ==============end=============//



// =====forgot password flow======//
  forgotPassword(email) { 
    return this.http.get<any>(this.baseUrl + '/users/forgotPassword/' + email).pipe(map(res => res));
  }
  
// update password
  postOtp(value) {

    console.log(value);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const param = {
      "email": value.email,
      "newPassword": value.newPassword,
      "otp": value.otp
    };
    return this.http.post<any>(this.baseUrl + '/users/validateOTP',
      param, { headers }).pipe(map(res => res));

  }

  activateAccount(userId) {
    this.userId = userId;
    localStorage.setItem('userId', this.userId)
    console.log(this.userId);
    return this.http.get<any>(this.baseUrl + '/users/trigger/manual/' + userId).pipe(map(res => res));
  }


  verifyActivateUserOtp(value) {
    
    console.log(this.userId);
    let user = localStorage.getItem('userId');
    console.log(user);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const param = {
      "otp": value.otp,
      "userId": user
    };
    return this.http.post<any>(this.baseUrl + '/users/activate',
      param, { headers }).pipe(map(res => res));

  }


  logout() {
    var headers = new HttpHeaders();
    headers = headers.set('token', localStorage.getItem('grocericaVendortoken'));
  
    console.log(headers);
    return this.http.get<any>(this.baseUrl + '/delivery/users/logout', {headers}).pipe(map(res => res));
    }

}
