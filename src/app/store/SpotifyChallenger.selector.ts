import { createFeatureSelector, createSelector } from '@ngrx/store';

const getChallengerState = createFeatureSelector<any>("spotify-challenger");

const getAlbuns = createSelector(getChallengerState, (state: any) => {
    return state.albuns
});

const getAlbumDetails = createSelector(getChallengerState, (state: any) => {
    return state.albumDetails
});


export const getChallengerStateQuery = {
    getAlbuns,
    getAlbumDetails
}