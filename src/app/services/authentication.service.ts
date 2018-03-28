import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';



@Injectable()
export class AuthenticationService {

  currentUser: string;
  token: any;
  role: string;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {

    // let httpHeaders = new HttpHeaders()
    //   .set('Access-Control-Allow-Origin', 'https://localhost:4200')
    //   .set('Token', '');

    return this.http.get(
      'http://localhost:4200/assets/json/user.json'
      //{username: username, password: password},
      // {headers: httpHeaders}
    ).map(
      data => {
        //const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        const response = JSON.parse(JSON.stringify(data));
        this.currentUser = response.username;
        this.role = response.role;
        this.token = response.token;
        //return response.token;
      }
    );
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

  isAuthenticated(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // if (state.url == "/my-reports" && this.role == "employee") {
    //   return true;
    // } else if (state.url == "/employees-reports" && this.role == "employer") {
    //   return true;
    // } else if (state.url == "/assign-tasks" && this.role == "employer") {
    //   return true;
    // } else {
    //   return false;
    // }

    return true;
  }

  fetchTimesheet() {

    return this.http.get(
      'http://localhost:4200/assets/json/timesheet.json'
      //{username: username, password: password},
      // {headers: httpHeaders}
    ).map(
      data => {
        //const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        const response = JSON.parse(JSON.stringify(data));
        return response;
      }
    );
  }

  fetchEmployees() {

    return this.http.get(
      'http://localhost:4200/assets/json/employees.json'
      //{username: username, password: password},
      // {headers: httpHeaders}
    ).map(
      data => {
        //const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        const response = JSON.parse(JSON.stringify(data));
        return response;
      }
    );
  }
}
