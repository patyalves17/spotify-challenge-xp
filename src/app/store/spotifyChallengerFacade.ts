import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AlbumDetailsRequest, AlbumsRequest } from './spotifyChallenger.actions';
import { getChallengerStateQuery } from './SpotifyChallenger.selector';

@Injectable({ providedIn: 'root' })
export class SpotifyChallengerFacade {
    albums$: Observable<any>;
    albumDetails$: Observable<any>;

    constructor(private store: Store<any>) {
        this.albums$ = this.store.select(getChallengerStateQuery.getAlbuns);
        this.albumDetails$ = this.store.select(getChallengerStateQuery.getAlbumDetails);
    }

    albumsRequest(payload): void {
        this.store.dispatch(new AlbumsRequest(payload));
    }

    albumDetailsRequest(payload): void {
        this.store.dispatch(new AlbumDetailsRequest(payload));
    }

}