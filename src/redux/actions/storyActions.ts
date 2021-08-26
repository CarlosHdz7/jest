/* eslint-disable no-unused-vars */
import { IStory } from '../../interfaces/IStory';
import {
  GET_STORIES_REQUEST,
  GET_STORIES_SUCCESS,
  GET_STORY_SUCCESS,
  GET_STORIES_FAILURE,
  CLEAN_STORIES,
} from '../types/storiesTypes';

const getStories = (offset: number, limit: string = '20') => async (dispatch:
  (action: { type: string; payload?: IStory; }) => void) => {
  dispatch({
    type: GET_STORIES_REQUEST,
  });

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/stories?offset=${offset}&limit=${limit}&ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`);
    const data: IStory = await response.json();

    dispatch({
      type: GET_STORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STORIES_FAILURE,
      payload: error,
    });
  }
};

const getStory = (id: string) => async (dispatch:
  (action: { type: string; payload?: IStory; }) => void) => {
  dispatch({
    type: GET_STORIES_REQUEST,
  });

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/stories/${id}?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`);
    const data: IStory = await response.json();

    dispatch({
      type: GET_STORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STORIES_FAILURE,
      payload: error,
    });
  }
};

const cleanStories = () => ({
  type: CLEAN_STORIES,
});

export { getStories, cleanStories, getStory };
