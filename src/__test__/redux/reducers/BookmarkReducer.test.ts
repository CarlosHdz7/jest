import _ from 'lodash';
import bookmarkReducer from '../../../redux/reducers/bookmarkReducer';
import {
  ADD_BOOKMARK, HIDE_BOOKMARK, REMOVE_BOOKMARK, REMOVE_BOOKMARKS, REMOVE_HIDDEN, SET_BOOKMARKS,
} from '../../../redux/types/bookmarksTypes';
import { TBookmark } from '../../../types/TBookmark';
import { bookmarkMock, bookmarksMock } from '../../mocks/bookmarks';

describe('testing bookmark reducer', () => {
  test('should return the initial state', () => {
    expect(bookmarkReducer(undefined, {})).toEqual([]);
  });

  test('should add bookmark', () => {
    const previousState: TBookmark[] = [];
    const action = {
      type: ADD_BOOKMARK,
      payload: bookmarkMock,
    };
    expect(bookmarkReducer(previousState, action)).toEqual([bookmarkMock]);
  });

  test('should remove bookmark', () => {
    const previousState: TBookmark[] = [bookmarkMock];
    const action = {
      type: REMOVE_BOOKMARK,
      payload: { uid: 'character0' },
    };
    expect(bookmarkReducer(previousState, action)).toEqual([]);
  });

  test('should remove bookmarks', () => {
    const previousState: TBookmark[] = [bookmarkMock];
    const action = {
      type: REMOVE_BOOKMARKS,
    };
    expect(bookmarkReducer(previousState, action)).toEqual([]);
  });

  test('should set bookmarks', () => {
    const previousState: TBookmark[] = [];
    const action = {
      type: SET_BOOKMARKS,
      payload: bookmarksMock,
    };

    expect(bookmarkReducer(previousState, action)).toEqual(bookmarksMock);
  });

  test('should remove hidden', () => {
    bookmarkMock.hidden = true;
    const previousState: TBookmark[] = [bookmarkMock];
    const action = {
      type: REMOVE_HIDDEN,
      payload: { uid: 'character0' },
    };
    expect(bookmarkReducer(previousState, action)).toEqual([]);
  });

  test('should hide bookmark', () => {
    const bookmarkMockClone = _.clone(bookmarkMock);
    bookmarkMock.hidden = false;

    const previousState: TBookmark[] = [bookmarkMock];
    const action = {
      type: HIDE_BOOKMARK,
      payload: { uid: 'character0' },
    };
    bookmarkMockClone.hidden = true;
    expect(bookmarkReducer(previousState, action)).toEqual([bookmarkMockClone]);
  });

  test('should do nothing', () => {
    bookmarkMock.hidden = false;
    const previousState: TBookmark[] = [bookmarkMock];
    const action = {
      type: HIDE_BOOKMARK,
      payload: { uid: 'character1' },
    };
    expect(bookmarkReducer(previousState, action)).toEqual([bookmarkMock]);
  });
});
