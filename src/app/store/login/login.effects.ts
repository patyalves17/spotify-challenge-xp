import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginActionTypes, LoginRequest, LoginSuccess, LoginFailure, RefreshTokenRequest } from './login.action';
import { AuthService } from './../../services/auth.service';

@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions, private authService: AuthService) { }

  @Effect() LoginRequest$ = this.actions$.pipe(
    ofType(LoginActionTypes.LoginRequest),
    switchMap((action: LoginRequest) =>
      this.authService.getAccessToken(action.payload).pipe(
        map(payload => new LoginSuccess(payload)),
        catchError(error => of(new LoginFailure(error)))
      ))
  );

  @Effect() RefreshTokenRequest$ = this.actions$.pipe(
    ofType(LoginActionTypes.RefreshTokenRequest),
    switchMap((action: RefreshTokenRequest) =>
      this.authService.getRefreshToken().pipe(
        map(payload => new LoginSuccess(payload)),
        catchError(error => of(new LoginFailure(error)))
      ))
  );

}
