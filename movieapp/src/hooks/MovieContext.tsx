import { useState, createContext, useContext, Context, useMemo } from 'react';
import { IMovie, MovieType } from '../models/Movie';

export const newMoviesMock = [
  {
    id: 'm3',
    title: 'Movie 3',
    description: 'Description for Movie 3',
    fullDescription: 'Full description for Movie 3'
  },
  {
    id: 'm4',
    title: 'Movie 4',
    description: 'Description for Movie 4',
    fullDescription: 'Full description for Movie 4'
  }
];

const NewMoviesContext: Context<any> = createContext({
  newMovies: []
});

export const NewMoviesProvider = ({ children }: { children: any }): any => {
  const [newMovies, setNewMovies] = useState<IMovie[]>(newMoviesMock);
  const value = useMemo(() => ({ newMovies, setNewMovies }), [newMovies]);
  return <NewMoviesContext.Provider value={value}>{children}</NewMoviesContext.Provider>;
};

const useNewMovies = (): any => {
  const { newMovies, setNewMovies } = useContext(NewMoviesContext);

  const deleteNewMovies = (id: string): void => {
    setNewMovies(newMovies.filter((el: { id: any }) => el.id !== id));
  };

  const addNewMovies = (movieToAdd: MovieType): any => {
    setNewMovies([...newMovies, movieToAdd]);
  };

  const updateNewMovies = (movieToUpdate: MovieType): any => {
    setNewMovies(newMovies.map((el: { id: any }) => (el.id === movieToUpdate.id ? movieToUpdate : el)));
  };

  if (NewMoviesContext === undefined) {
    throw new Error('useNewMovies must be used within a NewMoviesProvider');
  }
  return { newMovies, deleteNewMovies, addNewMovies, updateNewMovies };
};

export default useNewMovies;