/* eslint-disable no-unused-vars */
import { TBookmark } from '../../types/TBookmark';
import {
  ADD_BOOKMARK,
  HIDE_BOOKMARK,
  REMOVE_BOOKMARK,
  REMOVE_BOOKMARKS,
  REMOVE_HIDDEN,
  SET_BOOKMARKS,
} from '../types/bookmarksTypes';

const addBookmark = (data: TBookmark) => (dispatch:
  (action: { type: string; payload: TBookmark; }) => void) => {
  dispatch({
    type: ADD_BOOKMARK,
    payload: data,
  });
};

const removeBookmark = (data: TBookmark) => (dispatch:
  (action: { type: string; payload: TBookmark; }) => void) => {
  dispatch({
    type: REMOVE_BOOKMARK,
    payload: data,
  });
};

const removeBookmarks = () => (dispatch:
   (action: { type: string; }) => void) => {
  dispatch({
    type: REMOVE_BOOKMARKS,
  });
};

const removeHidden = () => (dispatch:
  (action: { type: string; }) => void) => {
  dispatch({
    type: REMOVE_HIDDEN,
  });
};

const setBookmarks = (data: Array<TBookmark>) => (dispatch:
  (action: { type: string; payload: TBookmark[]; }) => void) => {
  dispatch({
    type: SET_BOOKMARKS,
    payload: data,
  });
};

const hideBookmark = (data: TBookmark) => (dispatch:
  (action: { type: string; payload: TBookmark; }) => void) => {
  dispatch({
    type: HIDE_BOOKMARK,
    payload: data,
  });
};

export {
  addBookmark, removeBookmark, removeBookmarks, setBookmarks, hideBookmark, removeHidden,
};
