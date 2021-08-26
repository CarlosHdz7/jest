import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, RouteComponentProps, useParams } from 'react-router-dom';
import checkBookmark from '../../../helpers/checkBookmark';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { ICharacter, ItemsEntityComics, ItemsEntityStories } from '../../../interfaces/ICharacter';
import { addBookmark, hideBookmark, removeBookmark } from '../../../redux/actions/bookmarkActions';
import { getCharacter, cleanCharacters } from '../../../redux/actions/characterActions';
import { RootState } from '../../../redux/reducers';
import { TBookmark } from '../../../types/TBookmark';
import Breadcrumb from '../../breadcrumb';
import Loader from '../../loader';
import routesPath from '../../router/routes';

import './Character.scss';

const Character = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const { id }: { id: string } = useParams();
  const [, setBookmarksState] = useLocalStorage<Array<TBookmark>>('bookmarks', []);

  useEffect(() => {
    dispatch(getCharacter(id));

    return () => {
      dispatch(cleanCharacters());
    };
  }, [dispatch]);

  const character: ICharacter = useSelector((state: RootState) => state.characters.detail);
  const loading = useSelector((state: RootState) => state.characters.loading);
  const bookmarks: Array<TBookmark> = useSelector((state: RootState) => state.bookmarks);

  const handleAddBookmark = (name: string, idBookmark: number) => {
    if (!checkBookmark(bookmarks, `character${idBookmark}`)) {
      dispatch(addBookmark({
        uid: `character${idBookmark}`,
        type: 'character',
        redirect: 'characters',
        id: idBookmark,
        name,
        hidden: false,
      }));
    } else {
      dispatch(removeBookmark({
        uid: `character${idBookmark}`,
      }));
    }
  };

  const hideResource = (name: string, idBookmark: number) => {
    if (!checkBookmark(bookmarks, `character${idBookmark}`)) {
      dispatch(addBookmark({
        uid: `character${idBookmark}`,
        type: 'character',
        redirect: 'characters',
        id: idBookmark,
        name,
        hidden: true,
      }));
    } else {
      dispatch(hideBookmark({ uid: `character${idBookmark}` }));
    }
    history.push(routesPath.CHARACTERS);
  };

  useEffect(() => {
    setBookmarksState(bookmarks);
  }, [bookmarks]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          { character.code === 404 && <Redirect to={routesPath.ERROR404} /> }
          { character
          && (
          <>
            <Breadcrumb page="Characters" item={character.data?.results[0]?.name} redirect="/characters" />
            <div className="detail-container">
              <div>
                <img
                  src={`${character.data?.results[0].thumbnail.path}/portrait_incredible.${character.data?.results[0].thumbnail.extension}`}
                  alt=""
                  className="detail-img"
                />
              </div>
              <div>
                <h1>{character.data?.results[0].name}</h1>
                <p>{character.data?.results[0].description}</p>
                <button
                  type="button"
                  className={checkBookmark(bookmarks, `character${character.data?.results[0].id}`) ? 'btn btn-aqua' : 'btn btn-black'}
                  onClick={() => handleAddBookmark(character.data?.results[0].name,
                    character.data?.results[0].id)}
                >
                  <i className="bi bi-bookmark-fill" />
                  Bookmark
                </button>
                <button
                  type="button"
                  className="btn btn-black"
                  onClick={() => hideResource(character.data?.results[0].name,
                    character.data?.results[0].id)}
                >
                  <i className="bi bi-eye-slash-fill" />
                  Hide
                </button>
              </div>
            </div>
            { !!character.data?.results[0].comics.items.length
              && (
              <div className="detail-list-container">
                <p className="detail-title"><b>Comics</b></p>
                {
                  character.data?.results[0].comics.items.map((item: ItemsEntityComics) => (
                    <p>
                      ●
                      {' '}
                      {item.name}
                    </p>
                  ))
                }
              </div>
              )}
              { !!character.data?.results[0].stories.items.length
                && (
                <div className="detail-list-container">
                  <p className="detail-title"><b>Stories</b></p>
                  {
                    character.data?.results[0].stories.items.map((item: ItemsEntityStories) => (
                      <p>
                        ●
                        {' '}
                        {item.name}
                      </p>
                    ))
                  }
                </div>
                )}
          </>
          )}
        </>
      )}
    </>
  );
};

export default Character;
