import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor () {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);


    // const idToken = localStorage.getItem('id_token');
    //
    // if(idToken) {
    //   const cloned = req.clone({
    //       headers: req.headers.set('x-auth', 'Bearer' + idToken)
    //   });
    //   return next.handle(cloned);
    // }
    // else {
    //   return next.handle(req);
    // }
    return next.handle(req).pipe(
      tap(event => {
        console.log(event);
      })
    );

  }
}
