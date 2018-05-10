import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {BackendService} from '../services';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './add-task.component.html'
})

export class AppAddTask {

  model: any = {};

  constructor(private backendService: BackendService, private router: Router) {

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
