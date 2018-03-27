import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './my-reports.component.html'
})

export class AppMyReports {

  model: any = {};
  token: string;

  constructor() {
  }
}
