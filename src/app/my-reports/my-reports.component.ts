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

  timesheet: any;
  weekdays: string[] = [" ", "poniedziałek", "wtorek", "środa", "czwartek", "piątek"];

  constructor(private backendService: BackendService, private router: Router) {
    this.fetchTimesheet();
  }

  fetchTimesheet() {

    this.backendService.fetchTimesheetByEmployee(14, 2008).subscribe(
      data => {
        this.timesheet = data;
      }
    );
  }

  fetchPrevTimesheet() {

    let result = this.getWeekNumber(new Date());

    this.backendService.fetchTimesheetByEmployee(this.timesheet.week - 1, result[0]).subscribe(
      data => {
        this.timesheet = data;
      }
    );
  }

  fetchNextTimesheet() {

    let result = this.getWeekNumber(new Date());

    this.backendService.fetchTimesheetByEmployee(this.timesheet.week - (-1), result[0]).subscribe(
      data => {
        this.timesheet = data;
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

  save() {

    let trackList = new Array();

    $(document).ready(function () {

      $(".tracked_time").each(function () {
        let tmp = new Track();
        tmp.setTimeTracked($(this).val());
        trackList.push(tmp);
      });

      let i = 0;
      $(".description").each(function () {
        trackList[i].setDescription($(this).val());
        i++;
      });
    });

    this.backendService.saveTimesheet(trackList, this.timesheet).subscribe(
      data => {
        console.log("Timesheet saved");
        this.router.navigate(['/main']);
      }
    );
  }
}

class Track {
  private description: string;
  private timeTracked: number;

  constructor() {
    this.description = "";
    this.timeTracked = 0;
  }

  setDescription(value: string) {
    this.description = value;
  }

  setTimeTracked(value: number) {
    this.timeTracked = value;
  }
}
