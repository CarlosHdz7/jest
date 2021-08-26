/* eslint-disable no-unused-vars */
import { IComic } from '../../interfaces/IComic';
import {
  GET_COMICS_REQUEST,
  GET_COMICS_SUCCESS,
  GET_COMIC_SUCCESS,
  GET_COMICS_FAILURE,
  CLEAN_COMICS,
} from '../types/comicTypes';

const getComics = (offset: number, title: string = '', format: string = '', limit: string = '20') => async (dispatch:
  (action: { type: string; payload?: IComic; }) => void) => {
  dispatch({
    type: GET_COMICS_REQUEST,
  });

  let query = '';

  if (title) {
    query += `&titleStartsWith=${title}`;
  }

  if (format) {
    query += `&format=${format}&`;
  }

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/comics?offset=${offset}&${query}&limit=${limit}&ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`);
    const data: IComic = await response.json();

    dispatch({
      type: GET_COMICS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMICS_FAILURE,
      payload: error,
    });
  }
};

const getComic = (id: string) => async (dispatch:
  (action: { type: string; payload?: IComic; }) => void) => {
  dispatch({
    type: GET_COMICS_REQUEST,
  });

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/comics/${id}?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`);
    const data: IComic = await response.json();

    dispatch({
      type: GET_COMIC_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMICS_FAILURE,
      payload: error,
    });
  }
};

const cleanComics = () => ({
  type: CLEAN_COMICS,
});

export { getComics, cleanComics, getComic };
