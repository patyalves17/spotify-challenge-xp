import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { MainService } from '../../services/main.service';
import { AlbumDetailsActionTypes, AlbumDetailsRequest, AlbumDetailsSuccess } from './album-details.actions';


@Injectable()
export class AlbumsDetailsEffects {

  constructor(private actions$: Actions, private mainService: MainService) { }

  @Effect() AlbumDetailsRequest$ = this.actions$.pipe(
    ofType(AlbumDetailsActionTypes.AlbumDetailsRequest),
    switchMap((action: AlbumDetailsRequest) =>
      this.mainService.getAlbumDetails(action.payload).pipe(
        map(payload => new AlbumDetailsSuccess(payload))
      ))
  );

}
