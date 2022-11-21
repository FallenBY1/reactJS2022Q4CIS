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
};

export type MovieProps = {
  id?: string;
  title: string;
  description: string;
};

export type MovieState = {
  setMovies: any;
  movies: Movie[];
};

export type MovieFormProps = {
  onCloseModal: () => void;
  onAddMovie: (prev: any) => Function;
  currentValue: MovieProps;
};

export type SortElement = {
  [id: string]: string;
  title: string;
  link: string;
};
