import { Button } from '../../components/Button/Button';
import { SearchField } from '../../components/SearchField/SearchField';
import { useTranslation } from "react-i18next";

export function SearchForm(): JSX.Element {
    const { t } = useTranslation();
  return (
    <>
      <SearchField />
      <Button type={'button'} title={t('search')} />
    </>
  );
}
