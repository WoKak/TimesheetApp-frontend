import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {AuthenticationService} from '../services';

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

  constructor(private authService: AuthenticationService) {
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
}
