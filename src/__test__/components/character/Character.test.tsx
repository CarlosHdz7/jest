/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Character from '../../../components/pages/character';
import store from '../../../redux/store';
import charactersMock from '../../mocks/characters';

describe('testing character detail', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  it('should show loader', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        characters: {
          detail: {},
          loading: true,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/characters/1011334'] });

    const { queryByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Character />
        </Router>
      </Provider>,
    );

    expect(queryByTestId(/loader/i)).toBeTruthy();
  });

  it('should show character detail', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        characters: {
          detail: charactersMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/characters/1011334'] });

    const { getAllByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Character />
        </Router>
      </Provider>,
    );
    expect(getAllByText('3-D Man')[0]).toBeInTheDocument();
  });

  it('should add bookmark', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        characters: {
          detail: charactersMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/characters/1011334'] });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Character />
        </Router>
      </Provider>,
    );
    fireEvent.click(getByText('Bookmark'));
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it('should hide resource', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        characters: {
          detail: charactersMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/characters/1011334'] });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Character />
        </Router>
      </Provider>,
    );
    fireEvent.click(getByText('Hide'));
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it('should redirect 404', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    charactersMock.code = 404;

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        characters: {
          detail: charactersMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/characters/1011334'] });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Character />
        </Router>
      </Provider>,
    );

    expect(history.location.pathname).toBe('/Error404');
  });
});
