import { AlbumsActions, AlbumsActionTypes } from './albums-list.actions';

export interface State {
  data: {
    list: []
  },
  error: null,
  loading: false,
  loaded: false
}

const initialState: any = {
  data: {
    list: []
  },
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
        data: {
          albums: action.payload.list
        },
        error: null,
        loading: true,
        loaded: false
      }
    }

    default:
      return state
  }
}

// const recipeReducer = (state = initialState, action: RecipesAction.RecipesActions) => {
//   switch (action.type) {
//     case RecipesAction.SET_RECIPES:
//       return {
//         ...state,
//         recipes: [...action.payload]
//       }


//     default:
//       return state
//   }
// }

// export { recipeReducer }
