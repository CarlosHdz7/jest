/* eslint-disable no-unused-vars */
import { ICharacter } from '../../interfaces/ICharacter';
import {
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTERS_FAILURE,
  CLEAN_CHARACTERS,
} from '../types/charactersTypes';

const getCharacters = (offset: number, name: string = '', comic: string = '', stories = '') => async (dispatch:
   (action: { type: string; payload?: ICharacter; }) => void) => {
  dispatch({
    type: GET_CHARACTERS_REQUEST,
  });

  let query = '';

  if (name) {
    query += `nameStartsWith=${name}&`;
  }

  if (comic) {
    query += `comics=${comic}&`;
  }

  if (stories) {
    query += `stories=${stories}&`;
  }

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/characters?offset=${offset}&${query}ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`);
    const data: ICharacter = await response.json();

    dispatch({
      type: GET_CHARACTERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CHARACTERS_FAILURE,
      payload: error,
    });
  }
};

const getCharacter = (id: string) => async (dispatch:
  (action: { type: string; payload?: ICharacter; }) => void) => {
  dispatch({
    type: GET_CHARACTERS_REQUEST,
  });

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/characters/${id}?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`);
    const data: ICharacter = await response.json();

    dispatch({
      type: GET_CHARACTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CHARACTERS_FAILURE,
      payload: error,
    });
  }
};

const cleanCharacters = () => ({
  type: CLEAN_CHARACTERS,
});

export { getCharacters, cleanCharacters, getCharacter };
