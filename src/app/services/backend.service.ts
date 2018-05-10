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

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', '');

    return this.http.post(
      'https://localhost:5000/login',
      {username: username, password: password},
      {headers: httpHeaders}
    ).map(
      data => {
        // const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        const response = JSON.parse(JSON.stringify(data));
        this.currentUser = response.username;
        this.role = response.role;
        this.token = response.token;
        return response.token;
      }
    );
  }

  logout() {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    return this.http.post(
      'https://localhost:5000/logout',
      {username: this.currentUser, token: this.token},
      {headers: httpHeaders}
    ).map(
      data => {
        const response = JSON.parse(JSON.stringify(data));
        this.token = '';
        this.currentUser = '';
        return response.user;
      }
    );
  }

  isAuthenticated(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (state.url == "/my-reports" && this.role == "employee") {
      return true;
    } else if (state.url == "/employees-reports" && this.role == "employer") {
      return true;
    } else if (state.url == "/assign-tasks" && this.role == "employer") {
      return true;
    } else if (state.url == "/add-task" && this.role == "employer") {
      return true;
    } else {
      return false;
    }
  }

  fetchTimesheetByEmployer(week: any, year: any, worker: any) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    let url = 'https://localhost:5000/timesheet/fetch-timesheet/' + worker + '/' + week + '/' + year;

    return this.http.get(url, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data));
        return response;
      }
    );
  }

  // NEW
  fetchTasksForEmployee() {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    let url = 'https://localhost:5000/task/fetch-tasks/' + this.currentUser;

    return this.http.get(url, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data));
        return response;
      }
    );
  }

  fetchEmployees() {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    return this.http.get(
      'https://localhost:5000/employee/fetch-employees',
      {headers: httpHeaders}
    ).map(
      data => {
        //const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        const response = JSON.parse(JSON.stringify(data));
        return response;
      }
    );
  }

  // NEW
  fetchWeeklyReportForTask(week: any, selectedTask: any, year: any) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    return this.http.get(
      'https://localhost:5000/timesheet/fetch-task-report/' + this.currentUser + '/' + week + '/' + year + '/' + selectedTask,
      {headers: httpHeaders}
    ).map(
      data => {
        //const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        const response = JSON.parse(JSON.stringify(data));
        return response;
      }
    );
  }

  fetchTasks() {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    return this.http.get(
      'https://localhost:5000/task/fetch-tasks/' + this.currentUser,
      {headers: httpHeaders}
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
        const response = JSON.parse(JSON.stringify(data));
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
        const response = JSON.parse(JSON.stringify(data));
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
        return "OK";
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
        const response = JSON.parse(JSON.stringify(data));
        return response;
      }
    );
  }

  //NEW
  reportWeeklyReportForTask(week: any, selectedTask: any, tracked: any) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    let url = 'https://localhost:5000/timesheet/save-report';

    return this.http.post(
      url,
      {task_descriptions: tracked, week: week, selected_task: selectedTask, worker: this.currentUser},
      {headers: httpHeaders}
    ).map(
      data => {}
    );
  }
}
