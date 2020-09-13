// import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer'
import * as fromAlbums from '../main/store/albums-list.reducer';

import { ActionReducerMap } from '@ngrx/store'

export interface AppState {
  albums: fromAlbums.State
}

export const appReducer: ActionReducerMap<AppState> = {
  albums: fromAlbums.reducer
}
