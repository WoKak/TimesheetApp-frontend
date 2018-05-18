import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model: any = {};

  constructor(private router: Router, private authenticationService: BackendService) {
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password).subscribe();
    this.router.navigate(['/main']);
  }
}
