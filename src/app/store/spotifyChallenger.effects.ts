import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { MainService } from "../services/main.service";
import { AlbumDetailsRequest, AlbumDetailsSuccess, AlbumsActionTypes, AlbumsRequest, AlbumsSuccess } from './spotifyChallenger.actions';


@Injectable()
export class SpotifyChallengerEffect {

    constructor(private actions$: Actions, private mainService: MainService) { }

    @Effect() albumsRequest$ = this.actions$.pipe(
        ofType(AlbumsActionTypes.AlbumsRequest),
        switchMap((action: AlbumsRequest) =>
            this.mainService.getSearch(action.payload).pipe(
                map(payload => new AlbumsSuccess(payload))
            ))
    );


    @Effect() AlbumDetailsRequest$ = this.actions$.pipe(
        ofType(AlbumsActionTypes.AlbumDetailsRequest),
        switchMap((action: AlbumDetailsRequest) =>
            this.mainService.getAlbumDetails(action.payload).pipe(
                map(payload => new AlbumDetailsSuccess(payload))
            ))
    );

}
