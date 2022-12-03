import { Dispatch, SetStateAction } from 'react';

export type Button = {
  title: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ErrorProps = {
  children: JSX.Element;
};

export interface IError {
  hasError: boolean;
}

export type HeaderProps = {
  setMovies: Dispatch<SetStateAction<Movie[]>>;
  expandedMovie: Movie | undefined;
  setExpandedMovie: any;
};

export type Menu = {
  [id: string]: string;
  title: string;
  link: string;
};

export type Movie = {
  [id: string]: string;
  title: string;
  description: string;
  fullDescription: string;
};

export interface IMovie {
  [id: string]: string;
  title: string;
  description: string;
  fullDescription: string;
}

export type expandedMovieProps = {
  expandedMovie: Movie;
  setExpandedMovie: React.MouseEventHandler<HTMLButtonElement>;
};

export type MovieProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  id?: string;
  title: string;
  description: string;
  fullDescription?: string;
};

export type MovieState = {
  setMovies: Dispatch<SetStateAction<Movie[]>>;
  movies: Movie[];
  setExpandedMovie: Dispatch<SetStateAction<Movie | undefined>>;
};

export type MovieFormProps = {
  onCloseModal: () => void;
  onAddMovie: Dispatch<SetStateAction<Movie[]>>;
  currentValue: MovieProps;
};

export type SortElement = {
  [id: string]: string;
  title: string;
  link: string;
};
