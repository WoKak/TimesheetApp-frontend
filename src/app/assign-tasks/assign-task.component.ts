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

  tasks: any[] = [{'id': 1, 'name': 'todo1'}, {'id': 2, 'name': 'todo2'}];
  model: any = {};

  constructor(private backendService: BackendService, private router: Router) {
    this.fetchTasks();
  }

  fetchTasks() {

    this.backendService.fetchTasksByEmployer().subscribe(
      data => {
        this.tasks = data;
      }
    );
  }

  fetchDetails() {

    this.backendService.fetchDetails(this.getSelectedTask()).subscribe(
      data => {
        this.model.time = data.time;
        this.model.worker = data.worker;
      }
    );
  }

  updateDetails() {

    this.backendService.updateDetails(this.model.time, this.model.worker, this.getSelectedTask()).subscribe(
      data => {
      }
    );
  }

  getSelectedTask() {

    return $('#task option:selected').text();
  }
}
