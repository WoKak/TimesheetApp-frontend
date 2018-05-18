import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {BackendService} from './backend.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private backendService: BackendService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.backendService.isAuthenticated(route, state);
  }
}
