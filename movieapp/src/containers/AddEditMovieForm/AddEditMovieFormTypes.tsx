import { MovieProps } from '../../components/Card/CardTypes';

export type MovieFormProps = {
  onCloseModal: () => void;
  onAddMovie: (p: { description: string; id: string; title: string; fullDescription: string }) => void;
  onUpdateMovie: (p: { description: string; id: string; title: string; fullDescription: string }) => void;
  currentValue: MovieProps;
};
