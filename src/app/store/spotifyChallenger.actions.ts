import { Action } from '@ngrx/store'
import { spotifyChallengerReducer } from './spotifyChallenger.reducer';

export enum AlbumsActionTypes {
    AlbumsRequest = '[Albums] Albums List Request',
    AlbumsSuccess = '[Albums] Albums List Success',
    AlbumsFailure = '[Albums] Albums List Failure',

    AlbumDetailsRequest = '[AlbumDetails] Album Details List Request',
    AlbumDetailsSuccess = '[AlbumDetails] Album Details List Success',
    AlbumDetailsFailure = '[AlbumDetails] Album Details List Failure',
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


export class AlbumDetailsRequest implements Action {
    readonly type = AlbumsActionTypes.AlbumDetailsRequest;
    constructor(public payload: any) { }
}

export class AlbumDetailsSuccess implements Action {
    readonly type = AlbumsActionTypes.AlbumDetailsSuccess;
    constructor(public payload: any) { }
}

export class AlbumDetailsFailure implements Action {
    readonly type = AlbumsActionTypes.AlbumDetailsFailure;
    constructor(public payload: any) { }
}


export type SpotifyChallengerAction =
    | AlbumsFailure
    | AlbumsSuccess
    | AlbumsRequest
    | AlbumDetailsFailure
    | AlbumDetailsSuccess
    | AlbumDetailsRequest;
