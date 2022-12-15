import { Dispatch, SetStateAction } from 'react';

export type MovieType = {
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

export type MovieState = {
  // setMovies: Dispatch<SetStateAction<MovieType[]>>;
  // movies: MovieType[];
  setExpandedMovie: Dispatch<SetStateAction<MovieType | undefined>>;
};

export class Movie {
  public id: string;
  public title: string;
  public description: string;
  public fullDescription: string;
  constructor(props: MovieType) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.fullDescription = props.fullDescription;
  }
}
