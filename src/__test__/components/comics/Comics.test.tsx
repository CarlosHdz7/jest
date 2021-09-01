/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import store from '../../../redux/store';
import Comics from '../../../components/pages/comics';
import { comicsMock } from '../../mocks/comics';

type TestElement = Document | Element | Window | Node

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe('testing comics detail', () => {
  it('should show loader', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        comics: {
          list: [],
          loading: true,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/comics'] });

    const { queryByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Comics />
        </Router>
      </Provider>,
    );

    expect(queryByTestId(/loader/i)).toBeTruthy();
  });

  it('should show comics list', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        comics: {
          list: comicsMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/comics'] });

    const { getAllByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Comics />
        </Router>
      </Provider>,
    );

    expect(getAllByText('Ant-Man (2003) #4')[0]).toBeInTheDocument();
    expect(getAllByText('Gun Theory (2003) #3')[0]).toBeInTheDocument();
  });

  it('should update url when searching text', async () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        comics: {
          list: comicsMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/comics'] });

    const { getByRole } = render(
      <Provider store={store}>
        <Router history={history}>
          <Comics />
        </Router>
      </Provider>,
    );

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Spider' } });
    expect(hasInputValue(input, 'Spider')).toBe(true);
    await new Promise((r) => setTimeout(r, 1000));
    expect(history).toHaveLength(2);
    expect(history.entries[1].search).toBe('?page=1&title=Spider');
  });

  it('should update url when select format', async () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        comics: {
          list: comicsMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/comics'] });

    const { getByRole } = render(
      <Provider store={store}>
        <Router history={history}>
          <Comics />
        </Router>
      </Provider>,
    );

    const formatSelect = getByRole('combobox');
    fireEvent.change(formatSelect, { target: { value: 'magazine' } });
    await new Promise((r) => setTimeout(r, 1000));
    expect(history).toHaveLength(2);
    expect(history.entries[1].search).toBe('?page=1&format=magazine');
  });
});
