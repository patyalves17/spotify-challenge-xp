import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  LoginRequest = '[Login] Request',
  LoginSuccess = '[Login] Success',
  LoginFailure = '[Login] Failure',

  RefreshTokenRequest = '[RefreshToken] Request',
  RefreshTokenSuccess = '[RefreshToken] Success',
  RefreshTokenFailure = '[RefreshToken] Failure',
}

export class LoginRequest implements Action {
  readonly type = LoginActionTypes.LoginRequest;
  constructor(public payload: any) { }
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;
  constructor(public payload: any) { }
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LoginFailure;
  constructor(public payload: any) { }
}

export class RefreshTokenRequest implements Action {
  readonly type = LoginActionTypes.RefreshTokenRequest;
  constructor() { }
}

export class RefreshTokenSuccess implements Action {
  readonly type = LoginActionTypes.RefreshTokenSuccess;
  constructor(public payload: any) { }
}

export class RefreshTokenFailure implements Action {
  readonly type = LoginActionTypes.RefreshTokenFailure;
  constructor(public payload: any) { }
}


export type LoginActions =
  | LoginFailure
  | LoginSuccess
  | LoginRequest
  | RefreshTokenRequest
  | RefreshTokenSuccess
  | RefreshTokenFailure
  ;
