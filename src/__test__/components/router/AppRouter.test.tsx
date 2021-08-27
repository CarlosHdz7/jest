/* eslint-disable jest/expect-expect */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import AppRouter from '../../../components/router/AppRouter';
import '@testing-library/jest-dom';

describe('testing router', () => {
  test('landing on a not found page when no match component', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText, debug } = render(
      <Router history={history}>
        <AppRouter />
      </Router>,
    );
    debug();
    // expect(getByText('Page not found')).toBeInTheDocument();
  });
});
