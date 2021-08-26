import { IStory } from '../../interfaces/IStory';
import { TState } from '../../types/TState';
import {
  GET_STORIES_REQUEST,
  GET_STORIES_SUCCESS,
  GET_STORY_SUCCESS,
  GET_STORIES_FAILURE,
  CLEAN_STORIES,
} from '../types/storiesTypes';

const initialState: TState<IStory> = {
  list: {},
  detail: {},
  loading: false,
  error: '',
};

const storyReducer = (state: TState<IStory> = initialState, action: any) => {
  switch (action.type) {
    case GET_STORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GET_STORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: '',
      };
    case GET_STORY_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload,
        error: '',
      };
    case GET_STORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAN_STORIES:
      return initialState;
    default:
      return state;
  }
};

export default storyReducer;
