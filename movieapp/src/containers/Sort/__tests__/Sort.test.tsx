import renderer from 'react-test-renderer';
import { describe } from '@jest/globals';
import { Sort } from '../Sort';
import { fireEvent, render } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: any) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    };
  }
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

jest.mock('react-router', () => ({
  useNavigate: () => mockDispatch,
  navigate: () => mockDispatch
}));

const setup = () => {
  const utils = render(<Sort />);
  const select = utils.getByLabelText('sort');
  return {
    select,
    ...utils
  };
};

beforeEach(() => {
  fetchMock.doMock();
});

describe('Sort container', () => {
  it('should be rendered', () => {
    const sort = renderer.create(<Sort />).toJSON();
    expect(sort).toMatchSnapshot();
  });

  it('should fire change event', function () {
    const { select } = setup();
    const sortMovies = jest.fn();
    fireEvent.change(select);
    expect(sortMovies).toHaveBeenCalled();
  });
});
