import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { MainService } from '../../services/main.service';
import { AlbumsActionTypes, AlbumsRequest, AlbumsSuccess } from './albums-list.actions';


@Injectable()
export class AlbumEffects {

  constructor(private actions$: Actions, private mainService: MainService) { }

  @Effect() albumsRequest$ = this.actions$.pipe(
    ofType(AlbumsActionTypes.AlbumsRequest),
    switchMap((action: AlbumsRequest) =>
      this.mainService.getSearch(action.payload).pipe(
        map(payload => new AlbumsSuccess(payload))
      ))
  );

}
