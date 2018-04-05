import {Component} from '@angular/core';
import {BackendService} from "../services";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './mainpage.component.html'
})
export class AppMainpage {

  public tweets: any;

  constructor(private authService: BackendService, private router: Router) {
  }
}
