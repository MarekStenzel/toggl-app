import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  faEnvelopeSquare = faEnvelopeSquare;
  faEye = faEye;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);
    this.authService.signupUser(email, password)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
