import {
  RECEIVE_MOVIES_FROM_API_SUCCESS,
  RECEIVE_MOVIES_FROM_API_ERROR } from "../actions/actionTypes";

let initialState = {
  movies: [],
};

function reducer(state = initialState, action: { type: any; payload: any; }) {
  switch (action.type) {
    case RECEIVE_MOVIES_FROM_API_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case RECEIVE_MOVIES_FROM_API_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default reducer;
