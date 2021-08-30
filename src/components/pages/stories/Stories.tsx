/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IStory, ResultsEntityStory } from '../../../interfaces/IStory';
import { cleanStories, getStories } from '../../../redux/actions/storyActions';
import Card from '../../card';
import Loader from '../../loader';
import Pagination from '../pagination';
import checkBookmark from '../../../helpers/checkBookmark';
import { RootState } from '../../../redux/reducers';
import { TBookmark } from '../../../types/TBookmark';

const Stories = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const params = new URLSearchParams(history.location.search);
  const page = params.get('page') || '1';

  const offset = (parseInt(page, 10) - 1) * 20;
  const [currentPage, setCurrentPage] = useState(Number.isNaN(parseInt(page, 10)) && 1);

  useEffect(() => {
    dispatch(getStories(offset));

    return () => {
      dispatch(cleanStories());
    };
  }, [dispatch, offset]);

  const paginate = (pageNumber: number) => {
    (pageNumber === 1)
      ? history.push('/stories')
      : history.push(`?page=${pageNumber}`);
  };

  useEffect(() => {
    setCurrentPage(Number.isNaN(parseInt(page, 10)) ? 1 : parseInt(page, 10));
  }, [page]);

  const stories: IStory = useSelector((state: RootState) => state.stories.list);
  const loading = useSelector((state: RootState) => state.stories.loading);
  const bookmarks: Array<TBookmark> = useSelector((state: RootState) => state.bookmarks);

  return (
    <>
      <h1 className="title">Stories</h1>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="cards-container">
            {stories && stories.data?.results?.map((item: ResultsEntityStory) => {
              const mark = checkBookmark(bookmarks, `story${item.id}`);
              const hidden = (mark) ? mark.hidden : false;
              return (
                <Card
                  key={item.id}
                  redirect={`/stories/${item.id}`}
                  path="/images/story"
                  title={item.title}
                  extension="jpg"
                  mark={mark}
                  customClass={hidden ? 'd-none' : 'card--mini'}
                />
              );
            })}
          </div>
          <div>
            <Pagination
              perPage={20}
              total={stories.data?.total}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </>
      )}

    </>
  );
};

export default Stories;
