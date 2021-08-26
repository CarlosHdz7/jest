import { IComic } from '../../interfaces/IComic';
import { TState } from '../../types/TState';
import {
  GET_COMICS_REQUEST,
  GET_COMICS_SUCCESS,
  GET_COMIC_SUCCESS,
  GET_COMICS_FAILURE,
  CLEAN_COMICS,
} from '../types/comicTypes';

const initialState: TState<IComic> = {
  loading: false,
  list: {},
  detail: {},
  error: '',
};

const comicReducer = (state: TState<IComic> = initialState, action: any) => {
  switch (action.type) {
    case GET_COMICS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GET_COMICS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: '',
      };
    case GET_COMIC_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload,
        error: '',
      };
    case GET_COMICS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAN_COMICS:
      return initialState;
    default:
      return state;
  }
};

export default comicReducer;
