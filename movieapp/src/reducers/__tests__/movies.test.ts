import reducer from '../movies';
import { receiveMoviesFromApiError, receiveMoviesFromApiSuccess, sortMoviesById } from '../../actions/actions';

describe('Request reducer', () => {
  const initialState = {
    movies: []
  };
  it('has a default states', () => {
    expect(reducer(undefined, { type: 'unexpected', payload: [] })).toEqual(initialState);
  });

  it('should Receive movies from API', () => {
    const payload = [
      {
        id: '1',
        title: 'Title',
        description: 'Description',
        fullDescription: 'Full Description'
      }
    ];
    // @ts-ignore
    expect(reducer(initialState, receiveMoviesFromApiSuccess(payload)).movies).toHaveLength(1);
  });

  it('should Receive Error from API', () => {
    const payload = {
      error: 'error'
    };
    // @ts-ignore
    expect(reducer(initialState, receiveMoviesFromApiError(payload))).toEqual({ error: 'error', movies: [] });
  });

  it('should Sort movies by id', () => {
    const payload = [
      {
        id: '1',
        title: 'Title',
        description: 'Description',
        fullDescription: 'Full Description'
      }
    ];
    // @ts-ignore
    expect(reducer(initialState, sortMoviesById(payload)).movies).toHaveLength(1);
  });
});
