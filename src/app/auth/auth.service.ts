import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';


@Injectable()
export class AuthService{
  constructor(private httpClient: HttpClient,) {}
  token: string;

  loginUser(email: string, password: string) {
    const user = {email, password};
    // return this.httpClient.post('http://localhost:3000/users/login', user);

    const req = new HttpRequest('POST', 'http://localhost:3000/users/login', user, {reportProgress: false, withCredentials: true});
    const req2 = this.httpClient.request(req);
    return req2;
  }

  signupUser(email: string, password: string) {
    const user = {email, password};
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  // getToken() {
  //   firebase.auth().currentUser.getToken()
  //     .then(
  //       (token: string) => this.token = token
  //     );
  //   return this.token;
  // }
  //
  // logout() {
  //   this.token = null;
  // }
  //
  // isAuthenticated() {
  //   return this.token != null;
  // }

}
