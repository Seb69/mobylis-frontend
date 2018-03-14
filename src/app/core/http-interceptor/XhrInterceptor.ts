import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('private')) {
      console.log('INSIDE')
      req = req.clone({
        headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
          .set('Authorization', 'Basic ' + btoa( window.localStorage.getItem('username') + ':' + window.localStorage.getItem('password')))
      });
    }
    // extend server response observable with logging
    return next.handle(req);
  }
}

