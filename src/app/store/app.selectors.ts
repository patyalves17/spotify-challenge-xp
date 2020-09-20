import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as AlbumState } from './albums-list/albums-list.reducer';
import { State as AlbumDetailsState } from './album-details/album-details.reducer';

const selectAlbumsState = createFeatureSelector<AlbumState>('albums');
const selectAlbumDetailsState = createFeatureSelector<AlbumDetailsState>('albumDetails');


export const getAlbums = createSelector(
  selectAlbumsState,
  (state: AlbumState) => state
);


export const getAlbumDetails = createSelector(
  selectAlbumDetailsState,
  (state: AlbumDetailsState) => state
);
