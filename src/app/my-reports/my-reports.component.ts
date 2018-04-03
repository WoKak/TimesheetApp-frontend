import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {AuthenticationService} from '../services';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './my-reports.component.html'
})

export class AppMyReports {

  model: any = {};
  token: string;
  timesheet: any;
  weekdays: string[] = [" ", "poniedziałek", "wtorek", "środa", "czwartek", "piątek"];

  constructor(private authService: AuthenticationService) {
    this.fetchTimesheet();
  }

  fetchTimesheet() {

    this.authService.fetchTimesheet().subscribe(
      data => {
        this.timesheet = data;
      }
    );
  }

  fetchPrevTimesheet() {

  }

  fetchNextTimesheet() {

  }

  send() {
    console.log(this.timesheet);
  }
}
