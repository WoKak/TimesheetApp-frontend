import {Component, OnInit} from '@angular/core';
import {BackendService} from '../backend.service';

declare var $: any;

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {

  tasks: any[];
  model: any = {};

  constructor(private backendService: BackendService) {
  }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {

    this.backendService.fetchTasksByEmployer().subscribe(
      data => {
        this.tasks = data.tasks;
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

    this.backendService.updateDetails(this.model.time, this.model.worker, this.getSelectedTask()).subscribe();
  }

  getSelectedTask() {
    let selected = $('#task option:selected').text();
    return selected.substring(selected.indexOf(". ") + 2);
  }
}
