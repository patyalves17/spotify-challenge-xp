import { Action } from '@ngrx/store';

export enum AlbumDetailsActionTypes {
  AlbumDetailsRequest = '[AlbumDetails] Album Details List Request',
  AlbumDetailsSuccess = '[AlbumDetails] Album Details List Success',
  AlbumDetailsFailure = '[AlbumDetails] Album Details List Failure',
}

export class AlbumDetailsRequest implements Action {
  readonly type = AlbumDetailsActionTypes.AlbumDetailsRequest;
  constructor(public payload: any) { }
}

export class AlbumDetailsSuccess implements Action {
  readonly type = AlbumDetailsActionTypes.AlbumDetailsSuccess;
  constructor(public payload: any) { }
}

export class AlbumDetailsFailure implements Action {
  readonly type = AlbumDetailsActionTypes.AlbumDetailsFailure;
  constructor(public payload: any) { }
}


export type AlbumDetailsActions =
  | AlbumDetailsFailure
  | AlbumDetailsSuccess
  | AlbumDetailsRequest;
