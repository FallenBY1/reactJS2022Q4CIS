import { MovieType } from '../../models/Movie';

export type expandedMovieProps = {
  expandedMovie: MovieType;
  setExpandedMovie: React.MouseEventHandler<HTMLButtonElement>;
};
