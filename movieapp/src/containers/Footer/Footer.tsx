import { useTranslation } from 'react-i18next';
import { Localization } from '../../services/constants';

export function Footer(): JSX.Element {
  const { t } = useTranslation();
  return <h1>{t(Localization.FOOTER)}</h1>;
}
