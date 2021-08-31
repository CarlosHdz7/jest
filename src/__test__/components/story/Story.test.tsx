/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import * as reactRedux from 'react-redux';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Story from '../../../components/pages/story';
import store from '../../../redux/store';
import storiesMock from '../../mocks/stories';

describe('testing story detail', () => {
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
        stories: {
          detail: {},
          loading: true,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/stories/7'] });

    const { queryByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Story />
        </Router>
      </Provider>,
    );

    expect(queryByTestId(/loader/i)).toBeTruthy();
  });

  it('should show story detail', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        stories: {
          detail: storiesMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/stories/7'] });

    const { getAllByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Story />
        </Router>
      </Provider>,
    );
    expect(getAllByText(/Investigating the murder/i)[0]).toBeInTheDocument();
  });

  it('should add bookmark', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        stories: {
          detail: storiesMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/stories/7'] });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Story />
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
        stories: {
          detail: storiesMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/stories/7'] });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Story />
        </Router>
      </Provider>,
    );
    fireEvent.click(getByText('Hide'));
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it('should redirect 404', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    storiesMock.code = 404;

    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        stories: {
          detail: storiesMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/stories/7'] });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Story />
        </Router>
      </Provider>,
    );
    expect(history.location.pathname).toBe('/Error404');
  });
});
