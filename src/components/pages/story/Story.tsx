import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, RouteComponentProps, useParams } from 'react-router-dom';
import checkBookmark from '../../../helpers/checkBookmark';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { IStory, ItemsEntityCharacters, ItemsEntitySeriesOrComics } from '../../../interfaces/IStory';
import { addBookmark, hideBookmark, removeBookmark } from '../../../redux/actions/bookmarkActions';

import { getStory, cleanStories } from '../../../redux/actions/storyActions';
import { RootState } from '../../../redux/reducers';
import { TBookmark } from '../../../types/TBookmark';
import Breadcrumb from '../../breadcrumb';
import Loader from '../../loader';
import routesPath from '../../router/routes';
import './Story.scss';

const Story = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const { id }: { id: string } = useParams();
  const [, setBookmarksState] = useLocalStorage<Array<TBookmark>>('bookmarks', []);

  useEffect(() => {
    dispatch(getStory(id));

    return () => {
      dispatch(cleanStories());
    };
  }, [dispatch]);

  const story: IStory = useSelector((state: RootState) => state.stories.detail);
  const loading = useSelector((state: RootState) => state.stories.loading);
  const bookmarks: Array<TBookmark> = useSelector((state: RootState) => state.bookmarks);

  const handleAddBookmark = (name: string, idBookmark: number) => {
    if (!checkBookmark(bookmarks, `story${idBookmark}`)) {
      dispatch(addBookmark({
        uid: `story${idBookmark}`,
        type: 'story',
        redirect: 'stories',
        id: idBookmark,
        name,
        hidden: false,
      }));
    } else {
      dispatch(removeBookmark({
        uid: `story${idBookmark}`,
      }));
    }
  };

  const hideResource = (name: string, idBookmark: number) => {
    if (!checkBookmark(bookmarks, `story${idBookmark}`)) {
      dispatch(addBookmark({
        uid: `story${idBookmark}`,
        type: 'story',
        redirect: 'stories',
        id: idBookmark,
        name,
        hidden: true,
      }));
    } else {
      dispatch(hideBookmark({ uid: `story${idBookmark}` }));
    }

    history.push(routesPath.STORIES);
  };

  useEffect(() => {
    setBookmarksState(bookmarks);
  }, [bookmarks]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          { story.code === 404 && <Redirect to={routesPath.ERROR404} /> }
          <Breadcrumb page="Stories" item={story.data?.results[0].title} redirect="/stories" />
          <div className="story-container">
            <div>
              <h1>{story.data?.results[0].title}</h1>
              <p>{story.data?.results[0].description}</p>
              <button
                type="button"
                className={checkBookmark(bookmarks, `story${story.data?.results[0].id}`) ? 'btn btn-aqua' : 'btn btn-black'}
                onClick={() => handleAddBookmark(story.data?.results[0].title,
                  story.data?.results[0].id)}
              >
                <i className="bi bi-bookmark-fill" />
                Bookmark
              </button>
              <button
                type="button"
                className="btn btn-black"
                onClick={() => hideResource(story.data?.results[0].title,
                  story.data?.results[0].id)}
              >
                <i className="bi bi-eye-slash-fill" />
                Hide
              </button>
            </div>
          </div>
          { !!story.data?.results[0].characters.items.length
            && (
            <div className="detail-list-container">
              <p className="detail-title"><b>Characters</b></p>
              {
                story.data?.results[0].characters.items.map((item: ItemsEntityCharacters) => (
                  <p>
                    ●
                    {' '}
                    {item.name}
                  </p>
                ))
              }
            </div>
            )}
            { !!story.data?.results[0].comics.items.length
              && (
              <div className="detail-list-container">
                <p className="detail-title"><b>Comics</b></p>
                {
                  story.data?.results[0].comics.items.map((item: ItemsEntitySeriesOrComics) => (
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

export default Story;
