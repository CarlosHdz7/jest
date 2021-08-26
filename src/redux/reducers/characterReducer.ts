import { ICharacter } from '../../interfaces/ICharacter';
import { TState } from '../../types/TState';
import {
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTERS_FAILURE,
  CLEAN_CHARACTERS,
} from '../types/charactersTypes';

const initialState: TState<ICharacter> = {
  list: {},
  detail: {},
  loading: false,
  error: '',
};

const characterReducer = (state: TState<ICharacter> = initialState, action: any) => {
  switch (action.type) {
    case GET_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: '',
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload,
        error: '',
      };
    case GET_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAN_CHARACTERS:
      return initialState;
    default:
      return state;
  }
};

export default characterReducer;
