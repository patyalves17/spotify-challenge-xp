import { Action } from '@ngrx/store'

export enum AlbumsActionTypes {
  AlbumsRequest = '[Albums] Albums List Request',
  AlbumsSuccess = '[Albums] Albums List Success',
  AlbumsFailure = '[Albums] Albums List Failure',
}

export class AlbumsRequest implements Action {
  readonly type = AlbumsActionTypes.AlbumsRequest;
  constructor(public payload: any) { }
}

export class AlbumsSuccess implements Action {
  readonly type = AlbumsActionTypes.AlbumsSuccess;
  constructor(public payload: any) { }
}

export class AlbumsFailure implements Action {
  readonly type = AlbumsActionTypes.AlbumsFailure;
  constructor(public payload: any) { }
}


export type AlbumsActions =
  | AlbumsFailure
  | AlbumsSuccess
  | AlbumsRequest;
