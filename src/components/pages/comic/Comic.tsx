import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Redirect, useHistory, useParams,
} from 'react-router-dom';
import checkBookmark from '../../../helpers/checkBookmark';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { IComic, ItemsEntityOrSeries, ItemsEntityStories } from '../../../interfaces/IComic';
import { addBookmark, hideBookmark, removeBookmark } from '../../../redux/actions/bookmarkActions';
import { cleanComics, getComic } from '../../../redux/actions/comicsActions';
import { RootState } from '../../../redux/reducers';
import { TBookmark } from '../../../types/TBookmark';
import Breadcrumb from '../../breadcrumb';
import Loader from '../../loader';
import routesPath from '../../router/routes';

import './Comic.scss';

const Comic = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id }: { id: string } = useParams();
  const [, setBookmarksState] = useLocalStorage<Array<TBookmark>>('bookmarks', []);

  useEffect(() => {
    dispatch(getComic(id));

    return () => {
      dispatch(cleanComics());
    };
  }, [dispatch]);

  const comic: IComic = useSelector((state: RootState) => state.comics.detail);
  const loading = useSelector((state: RootState) => state.comics.loading);
  const bookmarks: Array<TBookmark> = useSelector((state: RootState) => state.bookmarks);

  const handleAddBookmark = (name: string, idBookmark: number) => {
    if (!checkBookmark(bookmarks, `comic${idBookmark}`)) {
      dispatch(addBookmark({
        uid: `comic${idBookmark}`,
        type: 'comic',
        redirect: 'comics',
        id: idBookmark,
        name,
        hidden: false,
      }));
    } else {
      dispatch(removeBookmark({
        uid: `comic${idBookmark}`,
      }));
    }
  };

  const hideResource = (name: string, idBookmark: number) => {
    if (!checkBookmark(bookmarks, `comic${idBookmark}`)) {
      dispatch(addBookmark({
        uid: `comic${idBookmark}`,
        type: 'comic',
        redirect: 'comics',
        id: idBookmark,
        name,
        hidden: true,
      }));
    } else {
      dispatch(hideBookmark({ uid: `comic${idBookmark}` }));
    }
    history.push(routesPath.COMICS);
  };

  useEffect(() => {
    setBookmarksState(bookmarks);
  }, [bookmarks]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          { comic.code === 404 && <Redirect to={routesPath.ERROR404} /> }
          <Breadcrumb page="Comics" item={comic.data?.results[0].title} redirect="/comics" />
          <div className="detail-container">
            <div>
              <img
                src={`${comic.data?.results[0].thumbnail.path}/portrait_incredible.${comic.data?.results[0].thumbnail.extension}`}
                alt=""
                className="detail-img"
              />
            </div>
            <div>
              <h1>{comic.data?.results[0].title}</h1>
              <p>{comic.data?.results[0].description}</p>
              <p>
                <b>Format:</b>
                {' '}
                {comic.data?.results[0].format
                  ? comic.data?.results[0].format
                  : 'Unknown'}
              </p>
              <button
                type="button"
                className={checkBookmark(bookmarks, `comic${comic.data?.results[0].id}`) ? 'btn btn-aqua' : 'btn btn-black'}
                onClick={() => handleAddBookmark(comic.data?.results[0].title,
                  comic.data?.results[0].id)}
              >
                <i className="bi bi-bookmark-fill" />
                Bookmark
              </button>
              <button
                type="button"
                className="btn btn-black"
                onClick={() => hideResource(comic.data?.results[0].title,
                  comic.data?.results[0].id)}
              >
                <i className="bi bi-eye-slash-fill" />
                Hide
              </button>
            </div>
          </div>
          { !!comic.data?.results[0].characters.items.length
            && (
            <div className="detail-list-container">
              <p className="detail-title"><b>Characters</b></p>
              {
                comic.data?.results[0].characters.items.map((item: ItemsEntityOrSeries) => (
                  <p>
                    ●
                    {' '}
                    {item.name}
                  </p>
                ))
              }
            </div>
            )}
            { !!comic.data?.results[0].stories.items
              && (
              <div className="detail-list-container">
                <p className="detail-title"><b>Stories</b></p>
                {
                  comic.data?.results[0].stories.items.map((item: ItemsEntityStories) => (
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
  );
};

export default Comic;
