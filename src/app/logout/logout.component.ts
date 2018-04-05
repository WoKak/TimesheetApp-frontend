import {Component} from '@angular/core';
import {BackendService} from "../services";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './logout.component.html'
})
export class AppLogout {

  constructor(private authService: BackendService) {

    // this.authService.logout().subscribe(
    //   data => {
    //     console.log("Logout successful");
    //   }
    // );

    this.authService.logout();
  }
}
