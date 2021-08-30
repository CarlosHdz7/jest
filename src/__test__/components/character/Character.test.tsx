/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Character from '../../../components/pages/character';
import store from '../../../redux/store';

describe('testing character detail', () => {
  it('should show loader', () => {
    const history = createMemoryHistory({ initialEntries: ['/characters/1009144'] });
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Character />
        </Router>
      </Provider>,
    );
    expect(container.getElementsByClassName('loader')[0]).toBeInTheDocument();
  });
});
