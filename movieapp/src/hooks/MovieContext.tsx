import { createContext, useContext, Context, useMemo, useCallback, useEffect } from 'react';
import { MovieType } from '../models/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { receiveMoviesFromApiError, receiveMoviesFromApiSuccess, sendMovieToApiSuccess } from '../actions/actions';
import { AnyAction } from 'redux';
import { searchParamsToQueryString } from '../services/utils';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const NewMoviesContext: Context<any> = createContext({
  newMovies: []
});

const getMoviesThunk = (params: any) => {
  return async (dispatch: any) => {
    fetch(searchParamsToQueryString(params))
      .then((res) => res.json())
      .then((movies) => setTimeout(() => dispatch(receiveMoviesFromApiSuccess(movies.data) as AnyAction), 1000))
      .catch((error) => setTimeout(() => dispatch(receiveMoviesFromApiError(error) as AnyAction), 1000));
  };
};

export const NewMoviesProvider = ({ children }: { children: any }): any => {
  const newMovies = useSelector((state: any) => state.movies);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = queryString.parse(location.search);

  useEffect(() => {
    // @ts-ignore
    dispatch(getMoviesThunk(searchParams));
  }, [dispatch, searchParams]);

  const setNewMovies = useCallback(() => {
    fetch(searchParamsToQueryString(searchParams))
      .then((res) => res.json())
      .then((movies) => dispatch(sendMovieToApiSuccess(movies) as AnyAction));
  }, [dispatch, searchParams]);

  const value = useMemo(() => ({ newMovies, setNewMovies }), [newMovies, setNewMovies]);
  return <NewMoviesContext.Provider value={value}>{children}</NewMoviesContext.Provider>;
};

const useNewMovies = (): any => {
  const { newMovies, setNewMovies } = useContext(NewMoviesContext);

  const deleteNewMovies = (id: string): void => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('http://localhost:4000/movies/' + id, requestOptions);
    setNewMovies(newMovies.movies.filter((el: { id: any }) => el.id !== id));
  };

  const addNewMovies = (movieToAdd: MovieType): any => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: movieToAdd.title, poster_path: 'https://jasonwatmore.com/_content/images/jason-watmore.jpg', overview: movieToAdd.description, runtime: 128, genres: ['Comedy'] })
    };
    fetch('http://localhost:4000/movies', requestOptions);
    setNewMovies([...newMovies.movies, movieToAdd]);
  };

  const updateNewMovies = (movieToUpdate: MovieType): any => {
    setNewMovies(newMovies.movies.map((el: { id: any }) => (el.id === movieToUpdate.id ? movieToUpdate : el)));
  };

  if (NewMoviesContext === undefined) {
    throw new Error('useNewMovies must be used within a NewMoviesProvider');
  }
  return { newMovies, deleteNewMovies, addNewMovies, updateNewMovies };
};

export default useNewMovies;
