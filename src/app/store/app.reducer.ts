
import * as fromAlbums from './albums-list/albums-list.reducer';
import * as formAlbumDetails from './album-details/album-details.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface AppStateInterface {
  albums: fromAlbums.State;
  albumDetails: formAlbumDetails.State;
}

export const appReducer: ActionReducerMap<AppStateInterface> = {
  albums: fromAlbums.reducer,
  albumDetails: formAlbumDetails.reducer
}
