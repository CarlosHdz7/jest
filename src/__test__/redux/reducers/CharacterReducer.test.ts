import characterReducer from '../../../redux/reducers/characterReducer';
import {
  CLEAN_CHARACTERS,
  GET_CHARACTERS_FAILURE, GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS, GET_CHARACTER_SUCCESS,
} from '../../../redux/types/charactersTypes';
import initialState from '../../mocks/initialState';
import charactersMock from '../../mocks/characters';

const theError = "I'm an error";

describe('testing character reducer', () => {
  it('should return the initial state', () => {
    expect(characterReducer(undefined, {})).toEqual(initialState);
  });

  it('should enable flat loading characters with no error', () => {
    const newState = characterReducer(initialState, { type: GET_CHARACTERS_REQUEST });
    expect(newState.error).toEqual('');
    expect(newState.loading).toBe(true);
  });

  it('should enable flat loading characters with error', () => {
    const newState = characterReducer(initialState,
      {
        type: GET_CHARACTERS_FAILURE,
        payload: theError,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).toEqual(theError);
  });

  it('should load characters without error', () => {
    const newState = characterReducer(initialState,
      {
        type: GET_CHARACTERS_SUCCESS,
        payload: charactersMock,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).not.toEqual(theError);
    expect(newState.list).toEqual(charactersMock);
    expect(newState.detail).toEqual({});
  });

  it('should load character without error', () => {
    const newState = characterReducer(initialState,
      {
        type: GET_CHARACTER_SUCCESS,
        payload: charactersMock,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).not.toEqual(theError);
    expect(newState.detail).toEqual(charactersMock);
    expect(newState.list).toEqual({});
  });

  it('should clean characters', () => {
    const newState = characterReducer(initialState,
      {
        type: CLEAN_CHARACTERS,
      });
    expect(newState.loading).toBe(false);
    expect(newState.error).toEqual('');
    expect(newState.detail).toEqual({});
    expect(newState.list).toEqual({});
  });
});
