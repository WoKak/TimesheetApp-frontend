import {Component, OnInit} from '@angular/core';
import {BackendService} from '../backend.service';
import {DateService} from '../date.service';

declare var $: any;

@Component({
  selector: 'app-employees-timesheets',
  templateUrl: './employees-timesheets.component.html',
  styleUrls: ['./employees-timesheets.component.css']
})
export class EmployeesTimesheetsComponent implements OnInit {

  timesheet: any;
  weekdays: string[] = [" ", "poniedziałek", "wtorek", "środa", "czwartek", "piątek"];
  employees: any;

  constructor(private backendService: BackendService, private dateService: DateService) {
  }

  ngOnInit() {

    this.fetchEmployees();
    this.fetchTimesheet();
  }

  fetchTimesheet() {

    let result = this.dateService.getWeekNumber(new Date());
    let worker = this.getSelectedWorker();

    if (worker === '') {
      worker = 'dlewnadowski';
    }

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

    let result = this.dateService.getWeekNumber(new Date());
    let worker = this.getSelectedWorker();

    this.backendService.fetchTimesheetByEmployer(this.timesheet.week - 1, result[0], worker).subscribe(
      data => {
        this.timesheet = data;
      }
    );
  }

  fetchNextTimesheet() {

    let result = this.dateService.getWeekNumber(new Date());
    let worker = this.getSelectedWorker();

    this.backendService.fetchTimesheetByEmployer(this.timesheet.week - (-1), result[0], worker).subscribe(
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

  getSelectedWorker() {

    return $('#worker option:selected').text();
  }
}
