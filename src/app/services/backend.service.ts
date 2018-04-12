import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class BackendService {

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

    // This is ok, for dev purposes commented

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

  fetchTimesheet(week: any, year: any, worker: any) {

    return this.http.get(
      'http://localhost:4200/assets/json/timesheet.json'
      //{username: username, password: password},
      // {headers: httpHeaders}
    ).map(
      data => {
        const response = JSON.parse(JSON.stringify(data));
        return response;
      }
    );
  }

  fetchTimesheetByEmployer(week: any, year: any, worker: any) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    let url = 'https://localhost:5000/timesheet/fetch-timesheet/' + worker + '/' + week + '/' + year;

    return this.http.get(url, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    );
  }

  fetchTimesheetByEmployee(week: any, year: any) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    let url = 'https://localhost:5000/timesheet/fetch-timesheet/' + this.currentUser + '/' + week + '/' + year;

    return this.http.get(url, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    );
  }

  fetchEmployees() {

    return this.http.get(
      'http://localhost:4200/assets/json/employees.json'
      // ,{headers: httpHeaders}
    ).map(
      data => {
        //const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        const response = JSON.parse(JSON.stringify(data));
        return response;
      }
    );
  }

  fetchTasks() {
    return this.http.get(
      'http://localhost:4200/assets/json/tasks.json'
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

  decline_timesheet(id_tmsht: any, week: any, year: any) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    let url = 'https://localhost:5000/timesheet/decline-timesheet/' + id_tmsht + '/' + week + '/' + year;

    console.log(url);

    return this.http.get(url, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    );
  }

  accept_timesheet(id_tmsht: any, week: any, year: any) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    let url = 'https://localhost:5000/timesheet/accept-timesheet/' + id_tmsht + '/' + week + '/' + year;

    return this.http.get(url, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    );
  }

  addTask(taskName: any, taskTime: any, employee: any) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    let url = 'https://localhost:5000/task/add-task/' + this.currentUser;

    return this.http.post(
      url,
      {task_name: taskName, task_time: taskTime, employee: employee},
      {headers: httpHeaders}
    ).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    );
  }

  saveTasks(tmpIds: any[], tmpNames: any[], tmpTimes: any[], tmpWorkers: any[]) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    let url = 'https://localhost:5000/task/update-tasks';

    return this.http.post(
      url,
      {ids: tmpIds, names: tmpNames, times: tmpTimes, workers: tmpWorkers},
      {headers: httpHeaders}
    ).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    );
  }

  saveTimesheet(trackList: any[], timesheet: any) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    let url = 'https://localhost:5000/timesheet/save-timesheet';

    return this.http.post(
      url,
      {task_descriptions: trackList, timesheet: timesheet},
      {headers: httpHeaders}
    ).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    );
  }
}
