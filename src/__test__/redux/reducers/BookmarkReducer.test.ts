/* eslint-disable no-console */
/* eslint-disable jest/expect-expect */
import bookmarkReducer from '../../../redux/reducers/bookmarkReducer';
import {
  ADD_BOOKMARK, HIDE_BOOKMARK, REMOVE_BOOKMARK, REMOVE_BOOKMARKS, REMOVE_HIDDEN, SET_BOOKMARKS,
} from '../../../redux/types/bookmarksTypes';
import { TBookmark } from '../../../types/TBookmark';

describe('testing bookmark reducer', () => {
  test('should return the initial state', () => {
    expect(bookmarkReducer(undefined, {})).toEqual([]);
  });

  test('should add bookmark', () => {
    const previousState: TBookmark[] = [];
    const payloadAdd = {
      uid: 'character0',
      type: 'character',
      redirect: 'characters',
      id: 0,
      name: 'test',
      hidden: false,
    };
    const action = {
      type: ADD_BOOKMARK,
      payload: payloadAdd,
    };
    expect(bookmarkReducer(previousState, action)).toEqual([payloadAdd]);
  });

  test('should remove bookmark', () => {
    const payloadToRemove = {
      uid: 'character0',
      type: 'character',
      redirect: 'characters',
      id: 0,
      name: 'test',
      hidden: false,
    };
    const previousState: TBookmark[] = [payloadToRemove];
    const action = {
      type: REMOVE_BOOKMARK,
      payload: { uid: 'character0' },
    };
    expect(bookmarkReducer(previousState, action)).toEqual([]);
  });

  test('should remove bookmarks', () => {
    const payloadToRemove = {
      uid: 'character0',
      type: 'character',
      redirect: 'characters',
      id: 0,
      name: 'test',
      hidden: false,
    };
    const previousState: TBookmark[] = [payloadToRemove];
    const action = {
      type: REMOVE_BOOKMARKS,
    };
    expect(bookmarkReducer(previousState, action)).toEqual([]);
  });

  test('should set bookmarks', () => {
    const previousState: TBookmark[] = [];
    const payloadAdd1 = {
      uid: 'character0',
      type: 'character',
      redirect: 'characters',
      id: 0,
      name: 'test',
      hidden: false,
    };

    const payloadAdd2 = {
      uid: 'character1',
      type: 'character',
      redirect: 'characters',
      id: 1,
      name: 'test 2',
      hidden: false,
    };
    const action = {
      type: SET_BOOKMARKS,
      payload: [payloadAdd1, payloadAdd2],
    };

    expect(bookmarkReducer(previousState, action)).toEqual([payloadAdd1, payloadAdd2]);
  });

  test('should remove hidden', () => {
    const payloadToRemove = {
      uid: 'character0',
      type: 'character',
      redirect: 'characters',
      id: 0,
      name: 'test',
      hidden: true,
    };
    const previousState: TBookmark[] = [payloadToRemove];
    const action = {
      type: REMOVE_HIDDEN,
      payload: { uid: 'character0' },
    };
    expect(bookmarkReducer(previousState, action)).toEqual([]);
  });

  test('should hide bookmark', () => {
    const payload = {
      uid: 'character0',
      type: 'character',
      redirect: 'characters',
      id: 0,
      name: 'test',
      hidden: false,
    };

    const payloadToHide = {
      uid: 'character0',
    };
    const previousState: TBookmark[] = [payload];
    const action = {
      type: HIDE_BOOKMARK,
      payload: payloadToHide,
    };
    expect(bookmarkReducer(previousState, action)).toEqual([{
      uid: 'character0',
      type: 'character',
      redirect: 'characters',
      id: 0,
      name: 'test',
      hidden: true,
    }]);
  });

  test('should do nothing', () => {
    const payload = {
      uid: 'character0',
      type: 'character',
      redirect: 'characters',
      id: 0,
      name: 'test',
      hidden: false,
    };

    const payloadToHide = {
      uid: 'character1',
    };
    const previousState: TBookmark[] = [payload];
    const action = {
      type: HIDE_BOOKMARK,
      payload: payloadToHide,
    };
    expect(bookmarkReducer(previousState, action)).toEqual([{
      uid: 'character0',
      type: 'character',
      redirect: 'characters',
      id: 0,
      name: 'test',
      hidden: false,
    }]);
  });
});
