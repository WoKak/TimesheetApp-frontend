import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './employees-reports.component.html'
})

export class AppEmployeesReports {

  model: any = {};
  token: string;

  constructor() {
  }
}
