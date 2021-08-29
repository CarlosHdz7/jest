/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/expect-expect */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Comic from '../../../components/pages/comic';
import store from '../../../redux/store';

describe('testing comic detail', () => {
  it('should show loader', () => {
    const history = createMemoryHistory({ initialEntries: ['/comics/1308'] });
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Comic />
        </Router>
      </Provider>,
    );
    expect(container.getElementsByClassName('loader')[0]).toBeInTheDocument();
  });
});
