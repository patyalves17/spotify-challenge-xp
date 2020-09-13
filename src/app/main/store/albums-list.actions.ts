import { Action } from '@ngrx/store'

export enum AlbumsActionTypes {
  AlbumsRequest = '[Albums] Albums List Request',
  AlbumsSuccess = '[Albums] Albums List Success'
}

export class AlbumsRequest implements Action {
  readonly type = AlbumsActionTypes.AlbumsRequest;
  constructor(public payload: any[]) { }
}

export class AlbumsSuccess implements Action {
  readonly type = AlbumsActionTypes.AlbumsSuccess;
  constructor(public payload) { }
}


export type AlbumsActions =
  | AlbumsSuccess
  | AlbumsRequest;
