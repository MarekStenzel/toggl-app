import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faEnvelopeSquare = faEnvelopeSquare;
  faEye = faEye;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
  }

}
