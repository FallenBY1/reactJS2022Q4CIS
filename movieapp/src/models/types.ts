export type Button = {
  title: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ErrorProps = {
  children: JSX.Element;
};

export type HeaderProps = {
  setMovies: any;
  expandedMovie: any;
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

export type expandedMovieProps = {
  expandedMovie: any;
  setExpandedMovie: any;
};

export type MovieProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  id?: string;
  title: string;
  description: string;
  fullDescription?: string;
};

export type MovieState = {
  setMovies: any;
  movies: Movie[];
  setExpandedMovie: any;
};

export type MovieFormProps = {
  onCloseModal: () => void;
  onAddMovie: (prev: any) => void;
  currentValue: MovieProps;
};

export type SortElement = {
  [id: string]: string;
  title: string;
  link: string;
};
