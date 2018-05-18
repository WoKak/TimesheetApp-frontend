import {Component, OnInit} from '@angular/core';
import {BackendService} from '../backend.service';
import {DateService} from '../date.service';

declare var $: any;

@Component({
  selector: 'app-employee-timesheets',
  templateUrl: './employee-timesheets.component.html',
  styleUrls: ['./employee-timesheets.component.css']
})
export class EmployeeTimesheetsComponent implements OnInit {

  tasks: string[];
  model: any = {};

  constructor(private backendService: BackendService, private dateService: DateService) {
  }

  ngOnInit() {

    this.fetchTasksForEmployee();
    let result = this.dateService.getWeekNumber(new Date());
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

    let result = this.dateService.getWeekNumber(new Date());
    let year = result[0];

    this.backendService.fetchWeeklyReportForTask(this.model.week, this.getSelectedTask(), year).subscribe(
      data => {
        this.model.tracked = data.tracked;
        this.model.status = data.status;
      }
    );
  }

  sendReport() {

    let result = this.dateService.getWeekNumber(new Date());
    let year = result[0];

    this.backendService.reportWeeklyReportForTask(this.model.week, year, this.getSelectedTask(), this.model.tracked).subscribe(
      data => {
      }
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
}
