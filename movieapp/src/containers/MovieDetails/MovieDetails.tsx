import { useTranslation } from 'react-i18next';
import { expandedMovieProps } from '../../models/types';
import { Button } from '../../components/Button/Button';
import { CONSTANTS } from '../../services/constants';
import { ButtonTypes } from '../../models/enums';

export function MovieDetails(props: expandedMovieProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <h2>{props.expandedMovie.title}</h2>
      <p>{props.expandedMovie.fullDescription}</p>
      <Button title={t(CONSTANTS.LABEL_CLOSE)} type={ButtonTypes.button} onClick={props.setExpandedMovie} />
    </>
  );
}
