/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Home from '../../../components/pages/home/index';
import '@testing-library/jest-dom';

describe('testing footer', () => {
  test('footer should have text', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Welcome to Marvel')).toBeInTheDocument();
  });
});
