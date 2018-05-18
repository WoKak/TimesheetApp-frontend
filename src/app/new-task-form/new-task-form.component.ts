import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {

  model: any = {};

  constructor(private backendService: BackendService, private router: Router) {
  }

  ngOnInit() {
  }

  add() {

    this.backendService.addTask(this.model.task_name, this.model.task_time, this.model.employee).subscribe(
      data => {
        console.log("Task added");
      }
    );

    this.router.navigate(['/assign-tasks']);
  }
}
