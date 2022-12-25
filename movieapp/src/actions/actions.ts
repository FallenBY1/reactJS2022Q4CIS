import {RECEIVE_MOVIES_FROM_API_ERROR, RECEIVE_MOVIES_FROM_API_SUCCESS} from "./actionTypes";

export function receiveMoviesFromApiSuccess(movies: any) {
  return {
    type: RECEIVE_MOVIES_FROM_API_SUCCESS,
    payload: movies
  };
}

export function receiveMoviesFromApiError(error: any) {
  return {
    type: RECEIVE_MOVIES_FROM_API_ERROR,
    payload: { error }
  };
}

