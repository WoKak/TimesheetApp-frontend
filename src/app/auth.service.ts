import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthService {

  constructor() {
  }

  isAuthenticated(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, role: string) {

    if (state.url == '/my-reports' && role == 'employee') {
      return true;
    } else if (state.url == '/employees-reports' && role == 'employer') {
      return true;
    } else if (state.url == '/assign-tasks' && role == 'employer') {
      return true;
    } else if (state.url == '/add-task' && role == 'employer') {
      return true;
    } else {
      return false;
    }
  }
}
