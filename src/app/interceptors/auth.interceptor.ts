import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem("access-token") ? localStorage.getItem("access-token") as string : '';
    req = req.clone({
      headers: req.headers.set('Access-Token', accessToken)
    })

    return next.handle(req);
  }
}
