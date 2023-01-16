import { Header } from '../Header';
import { describe } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';

const setExpandedMovieMock = jest.fn();

const setup = () => {
  const utils = render(<Header setExpandedMovie={setExpandedMovieMock} expandedMovie={{ id: '', title: '', description: '', fullDescription: '' }} />);
  const button = utils.getByLabelText('header');
  return {
    button,
    ...utils
  };
};

describe('Header container', () => {
  it('should trigger event', () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(setExpandedMovieMock).toBeCalled();
  });
});
