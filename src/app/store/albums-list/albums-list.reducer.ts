import { AlbumsActions, AlbumsActionTypes } from './albums-list.actions';

export interface State {
  list: [],
  filter: null,
  error: null,
  loading: false,
  loaded: false
}

const initialState: any = {
  list: [],
  filter: null,
  error: null,
  loading: false,
  loaded: false
}


export function reducer(state = initialState, action: AlbumsActions) {
  switch (action.type) {
    case AlbumsActionTypes.AlbumsRequest: {
      return {
        ...state,
        error: null,
        loading: true,
        loaded: false
      }
    }

    case AlbumsActionTypes.AlbumsSuccess: {
      return {
        ...state,
        list: action.payload.albums,
        filter: action.payload.filter,
        error: null,
        loading: false,
        loaded: true
      }
    }

    case AlbumsActionTypes.AlbumsFailure: {
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

