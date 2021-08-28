import comicReducer from '../../../redux/reducers/comicReducer';
import {
  CLEAN_COMICS,
  GET_COMICS_FAILURE, GET_COMICS_REQUEST, GET_COMICS_SUCCESS, GET_COMIC_SUCCESS,
} from '../../../redux/types/comicTypes';
import initialState from '../../mocks/initialState';
import charactersMock from '../../mocks/characters';

const theError = "I'm an error";

describe('testing comic reducer', () => {
  it('should return the initial state', () => {
    expect(comicReducer(undefined, {})).toEqual(initialState);
  });

  it('should enable flat loading characters with no error', () => {
    const newState = comicReducer(initialState, { type: GET_COMICS_REQUEST });
    expect(newState.error).toEqual('');
    expect(newState.loading).toBe(true);
  });

  it('should enable flat loading characters with error', () => {
    const newState = comicReducer(initialState,
      {
        type: GET_COMICS_FAILURE,
        payload: theError,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).toEqual(theError);
  });

  it('should load comics without error', () => {
    const newState = comicReducer(initialState,
      {
        type: GET_COMICS_SUCCESS,
        payload: charactersMock,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).not.toEqual(theError);
    expect(newState.list).toEqual(charactersMock);
    expect(newState.detail).toEqual({});
  });

  it('should load comic without error', () => {
    const newState = comicReducer(initialState,
      {
        type: GET_COMIC_SUCCESS,
        payload: charactersMock,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).not.toEqual(theError);
    expect(newState.detail).toEqual(charactersMock);
    expect(newState.list).toEqual({});
  });

  it('should clean comics', () => {
    const newState = comicReducer(initialState,
      {
        type: CLEAN_COMICS,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).toEqual('');
    expect(newState.detail).toEqual({});
    expect(newState.list).toEqual({});
  });
});
