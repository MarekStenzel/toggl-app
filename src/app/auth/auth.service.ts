import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {headersToString} from 'selenium-webdriver/http';


@Injectable()
export class AuthService{
  constructor(private httpClient: HttpClient) {}
  token: string;

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  loginUser(email: string, password: string) {
    const user = {email, password};
    const req2 = this.httpClient.post('http://localhost:3000/users/login',  user);
    this.loggedIn.next(true);
    return req2;
  }

  signupUser(email: string, password: string) {
    const user = {email, password};
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  logout() {
    this.loggedIn.next(false);
  }

  // getToken() {
  //   firebase.auth().currentUser.getToken()
  //     .then(
  //       (token: string) => this.token = token
  //     );
  //   return this.token;
  // }
  //


  //
  // isAuthenticated() {
  //   return this.token != null;
  // }

}
