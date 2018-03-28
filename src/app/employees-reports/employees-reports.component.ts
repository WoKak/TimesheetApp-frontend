import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {AuthenticationService} from '../services';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './employees-reports.component.html'
})

export class AppEmployeesReports {

  model: any = {};
  token: string;
  timesheet: any;
  weekdays: string[] = [" ", "poniedziałek", "wtorek", "środa", "czwartek", "piątek"];
  employees: any;

  constructor(private authService: AuthenticationService) {
    this.fetchTimesheet();
    this.fetchEmployees();
  }

  fetchTimesheet() {

    this.authService.fetchTimesheet().subscribe(
      data => {
        this.timesheet = data;
      }
    );
  }

  fetchEmployees() {

    this.authService.fetchEmployees().subscribe(
      data => {
        this.employees = data.employees;
      }
    );
  }

  fetchPrevTimesheet() {

  }

  fetchNextTimesheet() {

  }

  decline_timesheet() {

  }

  accept_timesheet() {

  }
}
