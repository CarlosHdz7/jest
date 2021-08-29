/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable jest/expect-expect */
/* eslint-disable react/react-in-jsx-scope */
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../../../components/app/App';
import store from '../../../redux/store';
import { renderHook } from '@testing-library/react-hooks';
import useLocalStorage from '../../../hooks/useLocalStorage';

describe('testing app', () => {
  it('should load from local storage', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );
    localStorage.setItem('test', 'Hello world');
    const { result } = renderHook(() => useLocalStorage('test', 'Hello world'));
    const [state] = result.current;
    expect(state).toEqual([]);
  });
});
