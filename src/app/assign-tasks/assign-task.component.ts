import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {BackendService} from '../services';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './assign-task.component.html'
})

export class AppAssignTask {

  employees: any;
  tasks: any;

  constructor(private backendService: BackendService, private router: Router) {
    this.fetchEmployees();
    this.fetchTasks();
  }

  fetchEmployees() {

    this.backendService.fetchEmployees().subscribe(
      data => {
        this.employees = data.employees;
      }
    );
  }

  fetchTasks() {

    this.backendService.fetchTasks().subscribe(
      data => {
        this.tasks = data.tasks;
      }
    );
  }

  save() {

    let tmpIds = [];
    $(document).ready(function () {
      $(".ids").each(function () {
        tmpIds.push(parseInt($(this).text()));
      });
    });

    let tmpNames = [];
    $(document).ready(function () {
      $(".names").each(function () {
        tmpNames.push($(this).text());
      });
    });

    let tmpTimes = [];
    $(document).ready(function () {
      $(".times").each(function () {
        tmpTimes.push(parseInt($(this).val()));
      });
    });

    let tmpWorkers = [];
    $(document).ready(function () {
      $(".workers").each(function () {
        tmpWorkers.push($(this).val());
      });
    });

    this.backendService.saveTasks(tmpIds, tmpNames, tmpTimes, tmpWorkers).subscribe(
      data => {
        console.log("Task updated");
        this.router.navigate(['/main']);
      }
    );
  }
}
