import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { RefreshTokenRequest } from '../store/login/login.action';

// import { AuthenticationService } from '@app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, protected storeBase: Store<any>) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401].includes(err.status)) {
        // auto logout if 401 or 403 response returned from api
        console.log('Errorrrr -> ', err);
        // this.storeBase.dispatch(new RefreshTokenRequest());
        this.authService.getRefreshToken();
      }

      const error = (err && err.error && err.error.message) || err.statusText;
      // console.error(err);
      return throwError(error);
    }))
  }
}
