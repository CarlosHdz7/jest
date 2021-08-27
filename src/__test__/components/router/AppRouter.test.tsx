/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import AppRouter from '../../../components/router/AppRouter';

describe('testing router', () => {
  test('landing on a not found page when no match component', () => {
    const history = createMemoryHistory({ initialEntries: ['/page-not-found'] });
    const { getByText } = render(
      <Router history={history}>
        <AppRouter />
      </Router>,
    );
    expect(getByText('Page not found.')).toBeInTheDocument();
  });
});
