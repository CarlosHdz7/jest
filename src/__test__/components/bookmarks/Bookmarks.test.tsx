/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/expect-expect */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import * as reactRedux from 'react-redux';
import Bookmarks from '../../../components/pages/bookmarks/Bookmarks';
import store from '../../../redux/store';
import { bookmarksMockApi } from '../../mocks/bookmarks';

describe('testing bookmarks', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('should render 2 bookmarks', () => {
    useSelectorMock.mockReturnValue(bookmarksMockApi);
    const history = createMemoryHistory({ initialEntries: ['/bookmarks'] });
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Bookmarks />
        </Router>
      </Provider>,
    );
    const itemsBookmarks = Array.from(container.getElementsByClassName('bookmark')).length;
    expect(itemsBookmarks).toBe(2);
  });

  it('should render 4 hidden', () => {
    useSelectorMock.mockReturnValue(bookmarksMockApi);
    const history = createMemoryHistory({ initialEntries: ['/bookmarks'] });
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Bookmarks />
        </Router>
      </Provider>,
    );
    const itemsHidden = Array.from(container.getElementsByClassName('hidden')).length;
    expect(itemsHidden).toBe(4);
  });

  it('should see no bookmarks yet', () => {
    useSelectorMock.mockReturnValue([]);
    const history = createMemoryHistory({ initialEntries: ['/bookmarks'] });
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Bookmarks />
        </Router>
      </Provider>,
    );

    expect(getByText('No bookmarks yet.')).toBeInTheDocument();
  });

  it('should delete bookmark', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue(bookmarksMockApi);

    const history = createMemoryHistory({ initialEntries: ['/bookmarks'] });
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Bookmarks />
        </Router>
      </Provider>,
    );
    const button = container.getElementsByClassName('bookmark-delete')[0];
    fireEvent.click(button);
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it('should delete hidden', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue(bookmarksMockApi);

    const history = createMemoryHistory({ initialEntries: ['/bookmarks'] });
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Bookmarks />
        </Router>
      </Provider>,
    );

    const button = container.getElementsByClassName('hidden-delete')[0];
    fireEvent.click(button);
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it('should delete all bookmarks', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue(bookmarksMockApi);

    const history = createMemoryHistory({ initialEntries: ['/bookmarks'] });
    const { getAllByRole } = render(
      <Provider store={store}>
        <Router history={history}>
          <Bookmarks />
        </Router>
      </Provider>,
    );
    fireEvent.click(getAllByRole('button')[0]);
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it('should delete all hidden', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue(bookmarksMockApi);

    const history = createMemoryHistory({ initialEntries: ['/bookmarks'] });
    const { getAllByRole } = render(
      <Provider store={store}>
        <Router history={history}>
          <Bookmarks />
        </Router>
      </Provider>,
    );
    fireEvent.click(getAllByRole('button')[1]);
    expect(dummyDispatch).toHaveBeenCalled();
  });
});
