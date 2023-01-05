import { RECEIVE_MOVIES_FROM_API_SUCCESS, RECEIVE_MOVIES_FROM_API_ERROR, SORT_MOVIES_BY_ID } from '../actions/actionTypes';

const initialState = {
  movies: []
};

function reducer(state = initialState, action: { type: any; payload: any }): object {
  switch (action.type) {
    case RECEIVE_MOVIES_FROM_API_SUCCESS:
      return {
        ...state,
        movies: action.payload
      };
    case RECEIVE_MOVIES_FROM_API_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    case SORT_MOVIES_BY_ID:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
