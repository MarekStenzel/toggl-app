import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class AuthService{
  constructor(private http: Http) {}
  loginUser(usersample: any[]) {
    return this.http.post('http://localhost:3000/users/login', usersample);
  }
}
