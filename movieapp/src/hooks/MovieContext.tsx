import { createContext, useContext, Context, useMemo, useCallback, useEffect } from 'react';
import { MovieType } from '../models/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { receiveMoviesFromApiError, receiveMoviesFromApiSuccess } from '../actions/actions';
import { AnyAction } from 'redux';

const NewMoviesContext: Context<any> = createContext({
  newMovies: []
});

export const NewMoviesProvider = ({ children }: { children: any }): any => {
  const newMovies = useSelector((state: any) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then((res) => res.json())
      .then((movies) => dispatch(receiveMoviesFromApiSuccess(movies.data) as AnyAction))
      .catch((error) => dispatch(receiveMoviesFromApiError(error) as AnyAction));
  }, [dispatch]);

  const setNewMovies = useCallback((movies: any) => dispatch(receiveMoviesFromApiSuccess(movies) as AnyAction), [dispatch]);

  const value = useMemo(() => ({ newMovies, setNewMovies }), [newMovies, setNewMovies]);
  return <NewMoviesContext.Provider value={value}>{children}</NewMoviesContext.Provider>;
};

const useNewMovies = (): any => {
  const { newMovies, setNewMovies } = useContext(NewMoviesContext);

  const deleteNewMovies = (id: string): void => {
    setNewMovies(newMovies.movies[0].filter((el: { id: any }) => el.id !== id));
  };

  const addNewMovies = (movieToAdd: MovieType): any => {
    setNewMovies([...newMovies.movies[0], movieToAdd]);
  };

  const updateNewMovies = (movieToUpdate: MovieType): any => {
    setNewMovies(newMovies.movies[0].map((el: { id: any }) => (el.id === movieToUpdate.id ? movieToUpdate : el)));
  };

  if (NewMoviesContext === undefined) {
    throw new Error('useNewMovies must be used within a NewMoviesProvider');
  }
  return { newMovies, deleteNewMovies, addNewMovies, updateNewMovies };
};

export default useNewMovies;
