import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpPhoneInterceptor implements HttpInterceptor {
  constructor() {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const URL = req.url;

    const authReq = req.clone(
      {
        headers: req.headers.set('Content-Type', 'application/json'),
        url: `http://localhost:3000/${URL}`
      }
    );

    return next.handle(authReq)
      .catch((error, caught) => {
        return Observable.throw(error);
      });
  }
}
