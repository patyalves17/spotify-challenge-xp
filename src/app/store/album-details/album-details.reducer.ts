import { AlbumDetailsActions, AlbumDetailsActionTypes } from './album-details.actions';

export interface State {
  album: null;
  error: null;
  loading: false;
  loaded: false;
}

const initialState: any = {
  album: null,
  error: null,
  loading: false,
  loaded: false
}


export function reducer(state = initialState, action: AlbumDetailsActions) {
  switch (action.type) {
    case AlbumDetailsActionTypes.AlbumDetailsRequest: {
      return {
        ...state,
        error: null,
        loading: true,
        loaded: false
      }
    }

    case AlbumDetailsActionTypes.AlbumDetailsSuccess: {
      return {
        ...state,
        album: action.payload,
        error: null,
        loading: false,
        loaded: true
      }
    }

    case AlbumDetailsActionTypes.AlbumDetailsFailure: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: true
      }
    }

    default:
      return state
  }
}

