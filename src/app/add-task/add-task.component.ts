import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {BackendService} from '../services';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './add-task.component.html'
})

export class AppAddTask {

  model: any = {};
  token: string;
  employees: any;
  tasks: any;

  constructor(private authService: BackendService) {

  }
}
