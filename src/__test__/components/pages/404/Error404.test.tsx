/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Error404 from '../../../../components/pages/404/Error404';
import '@testing-library/jest-dom';

describe('testing footer', () => {
  test('footer should have text', () => {
    const { getByText } = render(<Error404 />);
    expect(getByText('Page not found.')).toBeInTheDocument();
  });
});
