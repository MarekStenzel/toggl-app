import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HeaderComponent} from '../header/header.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent
  ]
})

export class AuthModule {}
