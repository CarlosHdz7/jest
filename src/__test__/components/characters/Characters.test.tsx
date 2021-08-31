/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/expect-expect */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import * as reactRedux from 'react-redux';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import store from '../../../redux/store';
import Characters from '../../../components/pages/characters';
import charactersMock from '../../mocks/characters';
import { comicsMock } from '../../mocks/comics';
import storiesMock from '../../mocks/stories';

type TestElement = Document | Element | Window | Node

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe('testing characters list', () => {
  it('should show loader', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        characters: {
          list: [],
          loading: true,
          bookmarks: [],
        },
        comics: {
          list: comicsMock,
          loading: false,
        },
        stories: {
          list: storiesMock,
          loading: false,
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/characters'] });

    const { queryByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Characters />
        </Router>
      </Provider>,
    );

    expect(queryByTestId(/loader/i)).toBeTruthy();
  });

  it('should show characters list', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        characters: {
          list: charactersMock,
          loading: false,
          bookmarks: [],
        },
        comics: {
          list: [],
          loading: true,
        },
        stories: {
          list: [],
          loading: true,
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/characters/1011334'] });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Characters />
        </Router>
      </Provider>,
    );

    expect(getByText('3-D Man')).toBeInTheDocument();
    expect(getByText('Agents of Atlas')).toBeInTheDocument();
    expect(getByText('Ajak')).toBeInTheDocument();
  });

  it('should update search text', async () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        characters: {
          list: charactersMock,
          loading: false,
          bookmarks: [],
        },
        comics: {
          list: [],
          loading: true,
        },
        stories: {
          list: [],
          loading: true,
        },
      }));

    const handleSearch = jest.fn();

    const history = createMemoryHistory({ initialEntries: ['/characters/1011334'] });

    const { debug, getByRole } = render(
      <Provider store={store}>
        <Router history={history}>
          <Characters />
        </Router>
      </Provider>,
    );

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Spider' } });
    expect(hasInputValue(input, 'Spider')).toBe(true);
  });
});
