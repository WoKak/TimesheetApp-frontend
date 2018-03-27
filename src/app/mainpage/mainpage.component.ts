import {Component} from '@angular/core';
import {AuthenticationService} from "../services";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './mainpage.component.html'
})
export class AppMainpage {

  public tweets: any;

  constructor(private authService: AuthenticationService, private router: Router) {
  }
}
