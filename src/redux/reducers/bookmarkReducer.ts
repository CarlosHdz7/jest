import { TBookmark } from '../../types/TBookmark';
import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  SET_BOOKMARKS,
  REMOVE_BOOKMARKS,
  HIDE_BOOKMARK,
  REMOVE_HIDDEN,
} from '../types/bookmarksTypes';

const initialState: Array<TBookmark> = [];

const bookmarkReducer = (state: Array<TBookmark> = initialState, action: any) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    case REMOVE_BOOKMARK:
      return state.filter((bookmark: TBookmark) => bookmark.uid !== action.payload.uid);
    case REMOVE_BOOKMARKS:
      return state.filter((bookmark: TBookmark) => bookmark.hidden !== false);
    case REMOVE_HIDDEN:
      return state.filter((bookmark: TBookmark) => bookmark.hidden !== true);
    case SET_BOOKMARKS:
      return [...action.payload];
    case HIDE_BOOKMARK:
      return state.map((bookmark) => ((bookmark.uid === action.payload.uid)
        ? { ...bookmark, hidden: !bookmark.hidden }
        : bookmark));

    default:
      return state;
  }
};

export default bookmarkReducer;
