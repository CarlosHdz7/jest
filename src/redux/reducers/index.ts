import { combineReducers } from 'redux';
import bookmarkReducer from './bookmarkReducer';
import characterReducer from './characterReducer';
import comicReducer from './comicReducer';
import storyReducer from './storyReducer';

const rootReducer = combineReducers({
  bookmarks: bookmarkReducer,
  stories: storyReducer,
  characters: characterReducer,
  comics: comicReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
