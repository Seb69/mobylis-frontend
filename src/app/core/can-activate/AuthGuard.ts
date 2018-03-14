import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from '../security/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return this.authService.isAuthenticated;
  }
}
