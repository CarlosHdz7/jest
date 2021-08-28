import storyReducer from '../../../redux/reducers/storyReducer';
import {
  CLEAN_STORIES,
  GET_STORIES_FAILURE, GET_STORIES_REQUEST, GET_STORIES_SUCCESS, GET_STORY_SUCCESS,
} from '../../../redux/types/storiesTypes';

import initialState from '../../mocks/initialState';
import comicsMock from '../../mocks/comics';

const theError = "I'm an error";

describe('testing story reducer', () => {
  it('should return the initial state', () => {
    expect(storyReducer(undefined, {})).toEqual(initialState);
  });

  it('should enable flat loading stories with no error', () => {
    const newState = storyReducer(initialState, { type: GET_STORIES_REQUEST });
    expect(newState.error).toEqual('');
    expect(newState.loading).toBe(true);
  });

  it('should enable flat loading stories with error', () => {
    const newState = storyReducer(initialState,
      {
        type: GET_STORIES_FAILURE,
        payload: theError,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).toEqual(theError);
  });

  it('should load stories without error', () => {
    const newState = storyReducer(initialState,
      {
        type: GET_STORIES_SUCCESS,
        payload: comicsMock,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).not.toEqual(theError);
    expect(newState.list).toEqual(comicsMock);
    expect(newState.detail).toEqual({});
  });

  it('should load character without error', () => {
    const newState = storyReducer(initialState,
      {
        type: GET_STORY_SUCCESS,
        payload: comicsMock,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).not.toEqual(theError);
    expect(newState.detail).toEqual(comicsMock);
    expect(newState.list).toEqual({});
  });

  it('should clean stories', () => {
    const newState = storyReducer(initialState,
      {
        type: CLEAN_STORIES,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).toEqual('');
    expect(newState.detail).toEqual({});
    expect(newState.list).toEqual({});
  });
});
