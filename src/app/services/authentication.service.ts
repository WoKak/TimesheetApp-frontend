import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable()
export class AuthenticationService {

  currentUser: string;
  token: any;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {

    // let httpHeaders = new HttpHeaders()
    //   .set('Access-Control-Allow-Origin', 'https://localhost:4200')
    //   .set('Token', '');
    //
    // return this.http.post(
    //   'https://localhost:8443/auth/login',
    //   {username: username, password: password},
    //   {headers: httpHeaders}
    // ).map(
    //   data => {
    //     const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
    //     this.currentUser = response.username;
    //     this.token = response.token;
    //     return response.token;
    //   }
    // );

    this.currentUser = username;
    console.log(this.currentUser);
  }

  logout() {
    // let httpHeaders = new HttpHeaders()
    //   .set('Access-Control-Allow-Origin', 'https://localhost:4200')
    //   .set('Token', this.token);
    //
    // return this.http.post(
    //   'https://localhost:8443/auth/logout',
    //   {username: this.currentUser, token: this.token},
    //   {headers: httpHeaders}
    // ).map(
    //   data => {
    //     const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
    //     this.token = '';
    //     return response.user;
    //   }
    // );
    this.currentUser = '';
  }

  isAuthenticated() {
    // return this.token.length != 0;
    return true;
  }
}
