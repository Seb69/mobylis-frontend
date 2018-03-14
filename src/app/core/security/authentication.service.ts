import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

  private _isAuthenticated = false;

  constructor(private router: Router) {
  }

  authenticate(username: string, password: string) {
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('password', password);
    this.isAuthenticated = true;
    this.router.navigate(['/admin']);
  }

  logout() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  get isAuthenticated(): boolean {
    if (window.localStorage.getItem('username') && window.localStorage.getItem('password')) {
      this._isAuthenticated = true;
    } else {
      this._isAuthenticated = false;
    }
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

}
