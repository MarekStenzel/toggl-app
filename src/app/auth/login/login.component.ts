import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  usersample = {
    "email": "markos123@example.com",
    "password": "password!"
  };

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

  }

  onLogin2() {
    this.authService.loginUser(this.usersample)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
