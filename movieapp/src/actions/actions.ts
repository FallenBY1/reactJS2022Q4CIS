import { RECEIVE_MOVIES_FROM_API_ERROR, RECEIVE_MOVIES_FROM_API_SUCCESS, SORT_MOVIES_BY_ID } from './actionTypes';
import { Movie } from '../models/Movie';

export function receiveMoviesFromApiSuccess(movies: any): object {
  return {
    type: RECEIVE_MOVIES_FROM_API_SUCCESS,
    payload: movies
  };
}

export function receiveMoviesFromApiError(error: any): object {
  return {
    type: RECEIVE_MOVIES_FROM_API_ERROR,
    payload: { error }
  };
}

export function sortMoviesById(movies: Movie[]): object | void {
  return {
    type: SORT_MOVIES_BY_ID,
    payload: movies
  };
}
