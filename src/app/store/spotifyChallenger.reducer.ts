import { AlbumsActionTypes, SpotifyChallengerAction } from "./spotifyChallenger.actions";

export const initialState = {
    albuns: null,
    albumDetails: null
}
export function spotifyChallengerReducer(
    state: any = initialState,
    action: SpotifyChallengerAction) {

    switch (action.type) {
        case AlbumsActionTypes.AlbumsRequest: {
            return {
                ...state,
                albuns: {
                    error: null,
                    loading: true,
                    loaded: false
                }

            }
        }

        case AlbumsActionTypes.AlbumsSuccess: {
            return {
                ...state,
                albuns: {
                    list: action.payload.albums,
                    filter: action.payload.filter,
                    error: null,
                    loading: false,
                    loaded: true
                }
            }
        }

        case AlbumsActionTypes.AlbumsFailure: {
            return {
                ...state,
                albuns: {
                    error: action.payload,
                    loading: false,
                    loaded: true
                }
            }
        }

        case AlbumsActionTypes.AlbumDetailsRequest: {
            return {
                ...state,
                albumDetails: {
                    error: null,
                    loading: true,
                    loaded: false
                }

            }
        }

        case AlbumsActionTypes.AlbumDetailsSuccess: {
            return {
                ...state,
                albumDetails: {
                    album: action.payload,
                    error: null,
                    loading: false,
                    loaded: true
                }

            }
        }

        case AlbumsActionTypes.AlbumDetailsFailure: {
            return {
                ...state,
                albumDetails: {
                    error: action.payload,
                    loading: false,
                    loaded: true
                }

            }
        }

        default:
            return state
    }

};