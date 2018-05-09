import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {BackendService} from '../services';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './employees-reports.component.html'
})

export class AppEmployeesReports {

  timesheet: any;
  weekdays: string[] = [" ", "poniedziałek", "wtorek", "środa", "czwartek", "piątek"];
  employees: any;

  constructor(private backendService: BackendService) {
    this.fetchEmployees();
    this.fetchTimesheet();
  }

  fetchTimesheet() {

    let result = this.getWeekNumber(new Date());
    let worker = this.getSelectedWorker();

    if (worker === "")
      worker = "mlody";

    this.backendService.fetchTimesheetByEmployer(result[1], result[0], worker).subscribe(
      data => {
        this.timesheet = data;
      }
    );
  }

  fetchEmployees() {

    this.backendService.fetchEmployees().subscribe(
      data => {
        this.employees = data.employees;
      }
    );
  }

  fetchPrevTimesheet() {

    let result = this.getWeekNumber(new Date());
    let worker = this.getSelectedWorker();

    this.backendService.fetchTimesheetByEmployer(this.timesheet.week - 1, result[0], worker).subscribe(
      data => {
        this.timesheet = data;
      }
    );
  }

  fetchNextTimesheet() {

    let result = this.getWeekNumber(new Date());
    let worker = this.getSelectedWorker();

    this.backendService.fetchTimesheetByEmployer(this.timesheet.week + 1, result[0], worker).subscribe(
      data => {
        this.timesheet = data;
      }
    );
  }

  decline_timesheet() {

    this.backendService.decline_timesheet(this.timesheet.id_tmsht, this.timesheet.week, this.timesheet.year).subscribe(
      data => {
        console.log("Raport odrzucony");
      }
    );
  }

  accept_timesheet() {

    this.backendService.accept_timesheet(this.timesheet.id_tmsht, this.timesheet.week, this.timesheet.year).subscribe(
      data => {
        console.log("Raport zaakceptowany");
      }
    );
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
    let weekNo = Math.ceil(( ( (d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
  }

  getSelectedWorker() {

    return $('#worker option:selected').text();
  }
}
