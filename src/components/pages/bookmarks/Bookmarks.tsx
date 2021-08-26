/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { removeBookmark, removeBookmarks, removeHidden } from '../../../redux/actions/bookmarkActions';
import { RootState } from '../../../redux/reducers';
import { TBookmark } from '../../../types/TBookmark';
import './Bookmarks.scss';

const Bookmarks = () => {
  const [, setBookmarksState] = useLocalStorage<Array<TBookmark>>('bookmarks', []);
  const dispatch = useDispatch();

  const deleteBookmarks = () => {
    dispatch(removeBookmarks());
  };

  const deleteHidden = () => {
    dispatch(removeHidden());
  };

  const deleteBookmark = (id: number, type: string) => {
    dispatch(removeBookmark({ uid: `${type}${id}` }));
  };

  const colorBadged = (option: string) => {
    if (option === 'comic') return 'badged badged--aqua';
    if (option === 'character') return 'badged badged--blue';
    return 'badged badged--red';
  };

  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const books = bookmarks.filter((item) => item.hidden === false);
  const hidden = bookmarks.filter((item) => item.hidden === true);

  useEffect(() => {
    setBookmarksState(bookmarks);
  }, [bookmarks]);

  return (
    <>
      <h1 className="title">Bookmarks</h1>
      {
        books.length !== 0
          ? (
            <div className="bookmarks-container">
              <div className="bookmarks-options">
                <button
                  type="button"
                  className="btn btn-red"
                  onClick={deleteBookmarks}
                >
                  <i className="bi bi-trash-fill" />
                  {' '}
                  Delete all
                </button>
              </div>
              {
                books.map((item: TBookmark) => (!item.hidden
                  && (
                  <div className="bookmark" key={item.id}>
                    <span
                      onClick={() => deleteBookmark(item.id, item.type)}
                      className="bookmark-delete"
                    >
                      <i className="bi bi-trash-fill" />
                    </span>
                    <span className={colorBadged(item.type)}>{item.type}</span>
                    <span><i className="bi bi-bookmark-fill" /></span>
                    <Link to={`${item.redirect}/${item.id}`} className="bookmark-title">{item.name}</Link>
                  </div>
                  )
                ))
              }
            </div>
          )
          : <p className="no-results">No bookmarks yet.</p>
      }

      <h1 className="title">Hidden</h1>
      {
        hidden.length !== 0
          ? (
            <div className="bookmarks-container">
              <div className="bookmarks-options">
                <button
                  type="button"
                  className="btn btn-red"
                  onClick={deleteHidden}
                >
                  <i className="bi bi-trash-fill" />
                  {' '}
                  Delete all
                </button>
              </div>
              {
                hidden.map((item: TBookmark) => (item.hidden
                  && (
                  <div className="bookmark" key={item.id}>
                    <span
                      onClick={() => deleteBookmark(item.id, item.type)}
                      className="bookmark-delete"
                    >
                      <i className="bi bi-trash-fill" />
                    </span>
                    <span className={colorBadged(item.type)}>{item.type}</span>
                    <span><i className="bi bi-eye-slash-fill" /></span>
                    <span className="bookmark-title">{item.name}</span>
                  </div>
                  )
                ))
              }
            </div>
          )
          : <p className="no-results">No hidden yet.</p>
      }

    </>
  );
};

export default Bookmarks;