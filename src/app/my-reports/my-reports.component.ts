import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {BackendService} from '../services';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './my-reports.component.html'
})

export class AppMyReports {

  tasks: string[];
  model: any = {};

  constructor(private backendService: BackendService, private router: Router) {

    this.fetchTasksForEmployee();
    let result = this.getWeekNumber(new Date());
    this.model.week = result[1];
  }

  fetchTasksForEmployee() {

    this.backendService.fetchTasksByEmployee().subscribe(
      data => {
        this.tasks = data.tasks;
      }
    );
  }

  fetchReport() {

    let result = this.getWeekNumber(new Date());
    let year = result[0];

    this.backendService.fetchWeeklyReportForTask(this.model.week, this.getSelectedTask(), year).subscribe(
      data => {
        this.model.tracked = data.tracked;
        this.model.status = data.status;
      }
    );
  }

  sendReport() {

    let result = this.getWeekNumber(new Date());
    let year = result[0];

    this.backendService.reportWeeklyReportForTask(this.model.week, year, this.getSelectedTask(), this.model.tracked).subscribe(
      data => {}
    );
  }

  getSelectedTask() {

    return $('#task option:selected').text();
  }

  decreaseWeek() {
    this.model.week--;
  }

  increaseWeek() {
    this.model.week++;
  }

  getWeekNumber(d) {

    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    let weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
  }
}
