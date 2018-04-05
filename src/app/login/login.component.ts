import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../services';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './login.component.html'
})

export class AppLogin {

  model: any = {};
  token: string;

  constructor(private router: Router, private authenticationService: BackendService) {
  }

  login() {

    // this.authenticationService.login(this.model.username, this.model.password).subscribe(
    //   data => {
    //     this.token = data;
    //
    //     if (this.token !== '') {
    //       this.router.navigate(['/main']);
    //     }
    //   }
    // );
    this.authenticationService.login(this.model.username, this.model.password).subscribe();
    this.router.navigate(['/main']);
  }
}
