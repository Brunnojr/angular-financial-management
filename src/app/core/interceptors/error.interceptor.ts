import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private DEFAULT_REQUEST_RETRY_ATTEMPTS_NUMBER = 1;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(this.DEFAULT_REQUEST_RETRY_ATTEMPTS_NUMBER),
      tap({
        error: (error: any) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 404) {
              alert('caiu no intercept 404')
            }
          }
        },
      })
    );
  }
}
