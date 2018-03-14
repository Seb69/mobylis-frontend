import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {User} from './model/User';
import {AuthenticationService} from '../../core/security/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private auth: AuthenticationService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.auth.authenticate(username, password);
  }


  logout() {
    this.auth.logout();
  }


  ngOnInit() {
  }

}
