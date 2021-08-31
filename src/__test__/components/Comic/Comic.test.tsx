/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Comic from '../../../components/pages/comic';
import store from '../../../redux/store';
import { comicsMock } from '../../mocks/comics';

describe('testing comic detail', () => {
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
        comics: {
          detail: {},
          loading: true,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/comics/1689'] });

    const { queryByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Comic />
        </Router>
      </Provider>,
    );

    expect(queryByTestId(/loader/i)).toBeTruthy();
  });

  it('should show comic detail', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        comics: {
          detail: comicsMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/comics/82970'] });

    const { getAllByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Comic />
        </Router>
      </Provider>,
    );
    expect(getAllByText('Marvel Previews (2017)')[0]).toBeInTheDocument();
  });

  it('should add bookmark', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        comics: {
          detail: comicsMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/comics/82970'] });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Comic />
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
        comics: {
          detail: comicsMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/comics/82970'] });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Comic />
        </Router>
      </Provider>,
    );
    fireEvent.click(getByText('Hide'));
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it('should redirect 404', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    comicsMock.code = 404;

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        comics: {
          detail: comicsMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/comics/82970'] });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Comic />
        </Router>
      </Provider>,
    );
    expect(history.location.pathname).toBe('/Error404');
  });
});
