import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,
    FontAwesomeModule
  ]
})

export class AuthModule {}
