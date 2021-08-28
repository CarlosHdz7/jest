/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Home from '../../../components/pages/home/index';
import '@testing-library/jest-dom';

describe('testing home', () => {
  test('home should have text', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Welcome to Marvel')).toBeInTheDocument();
  });
});
