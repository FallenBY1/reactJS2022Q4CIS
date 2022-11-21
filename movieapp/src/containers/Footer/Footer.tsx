import { useTranslation } from 'react-i18next';
import { CONSTANTS } from '../../services/constants';

export function Footer(): JSX.Element {
  const { t } = useTranslation();
  return <h1>{t(CONSTANTS.FOOTER)}</h1>;
}
