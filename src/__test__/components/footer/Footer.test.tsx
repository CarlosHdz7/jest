/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Footer from '../../../components/footer/Footer';
import '@testing-library/jest-dom';

describe('testing footer', () => {
  test('footer should have text', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Marvel - 2021')).toBeInTheDocument();
  });
});
