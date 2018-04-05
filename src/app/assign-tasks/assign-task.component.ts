import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {BackendService} from '../services';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './assign-task.component.html'
})

export class AppAssignTask {

  model: any = {};
  token: string;
  employees: any;
  tasks: any;

  constructor(private authService: BackendService) {
    this.fetchEmployees();
    this.fetchTasks();
  }

  fetchEmployees() {

    this.authService.fetchEmployees().subscribe(
      data => {
        this.employees = data.employees;
      }
    );
  }

  fetchTasks() {

    this.authService.fetchTasks().subscribe(
      data => {
        this.tasks = data.tasks;
      }
    );
  }

  removeWorker() {
    $(document).ready(function() {
      $(".btn-danger").on( 'click', function() {
        $(this).parent().prev().remove();
        $(this).parent().remove();
      });
    });
  }
}
