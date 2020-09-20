import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';


@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(
    private storageService: StorageService,
    private authService: AuthService) { }


  /**
   *
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @return {Observable}     Request
   */

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<any> {

    const authenticateRequest = request.clone(this.setHeaders(request));

    return next.handle(authenticateRequest).pipe(catchError(error => {
      return this.handleResponseError(error, request, next);
    }));
  }

  handleResponseError(error, request?, next?) {
    console.log(request);

    if (error.status === 401) {
      return this.authService.getRefreshToken().pipe(
        switchMap(() => {
          const authenticateRequest = request.clone(this.setHeaders(request));
          return next.handle(authenticateRequest);
        }),
        catchError(e => {
          if (e.status !== 401) {
            return this.handleResponseError(e);
          }
        }));
    }


    return throwError(error);

  }

  setHeaders(request) {
    const headerSettings: { [name: string]: string | string[]; } = {};

    if (this.storageService.hasSessionStorage('access_token')
      && (request.url.indexOf('/token') === -1)) {

      const tokenType = this.storageService.getSessionStorage('token_type');
      const accessToken = this.storageService.getSessionStorage('access_token');
      headerSettings['Authorization'] = `${tokenType} ${accessToken}`;

    } else {
      return headerSettings;
    }


    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }

    const newHeader = new HttpHeaders(headerSettings);

    return { headers: newHeader };
  }


}
