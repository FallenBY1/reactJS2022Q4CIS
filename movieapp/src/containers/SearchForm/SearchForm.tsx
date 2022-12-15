import { Button } from '../../components/Button/Button';
import { SearchField } from '../../components/SearchField/SearchField';
import { useTranslation } from 'react-i18next';
import { Localization } from '../../services/constants';
import { ButtonTypes } from '../../models/enums';

export function SearchForm(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <SearchField />
      <Button type={ButtonTypes.button} title={t(Localization.SEARCH)} />
    </>
  );
}
