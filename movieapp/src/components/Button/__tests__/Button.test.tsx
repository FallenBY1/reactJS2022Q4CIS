import renderer from 'react-test-renderer';
import { Button } from '../Button';
import { ButtonTypes } from '../../../models/enums';
import { Localization } from '../../../services/constants';
import { t } from 'i18next';
import { describe } from '@jest/globals';

describe('Button component', () => {
  it('renders correctly', () => {
    const button = renderer.create(<Button type={ButtonTypes.button} onClick={() => false} title={t(Localization.LABEL_CLOSE)} />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
