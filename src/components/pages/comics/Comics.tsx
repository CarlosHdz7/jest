/* eslint-disable no-unused-expressions */
import React, {
  useEffect, useState, useRef, MutableRefObject,
} from 'react';

import _ from 'lodash';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IComic, ResultsEntityComic } from '../../../interfaces/IComic';
import { getComics, cleanComics } from '../../../redux/actions/comicsActions';
import Card from '../../card';
import Loader from '../../loader';
import Pagination from '../pagination';
import checkBookmark from '../../../helpers/checkBookmark';
import { RootState } from '../../../redux/reducers';
import { TBookmark } from '../../../types/TBookmark';
import './Comics.scss';

const Comics = ({ location, history }: RouteComponentProps) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const selectRef = useRef() as MutableRefObject<HTMLSelectElement>;
  const dispatch = useDispatch();

  const params = new URLSearchParams(location.search);
  const page = params.get('page') || '1';
  const title = params.get('title') || '';
  const format = params.get('format') || '';

  const offset = (parseInt(page, 10) - 1) * 20;
  const [currentPage, setCurrentPage] = useState(Number.isNaN(parseInt(page, 10)) && 1);

  useEffect(() => {
    dispatch(getComics(offset, title, format));

    return () => {
      dispatch(cleanComics());
    };
  }, [dispatch, offset, title, format]);

  const buildQuery = (pageQuery: string, titleQuery: string, formatQuery : string) => {
    const currentUrlParams = new URLSearchParams(location.search);
    currentUrlParams.set('page', pageQuery);
    (titleQuery)
      ? currentUrlParams.set('title', titleQuery)
      : currentUrlParams.delete('title');
    (formatQuery)
      ? currentUrlParams.set('format', formatQuery)
      : currentUrlParams.delete('format');
    return `${window.location.pathname}?${currentUrlParams.toString()}`;
  };

  const paginate = (pageNumber: number) => {
    const query = buildQuery(pageNumber.toString(), title, format);
    history.push(query);
  };

  const handleSearch = _.debounce(() => {
    const query = buildQuery('1', inputRef.current.value, format);
    history.push(query);
  }, 1000);

  const handleSelect = () => {
    const currentUrlParams = new URLSearchParams(location.search);
    currentUrlParams.set('page', '1');

    (selectRef.current.value)
      ? currentUrlParams.set('format', selectRef.current.value)
      : currentUrlParams.delete('format');

    history.push(`${window.location.pathname}?${currentUrlParams.toString()}`);
  };

  useEffect(() => {
    inputRef.current.value = title;
  }, [title]);

  useEffect(() => {
    setCurrentPage(Number.isNaN(parseInt(page, 10)) ? 1 : parseInt(page, 10));
  }, [page]);

  const comics: IComic = useSelector((state: RootState) => state.comics.list);
  const loading = useSelector((state: RootState) => state.comics.loading);
  const bookmarks: Array<TBookmark> = useSelector((state: RootState) => state.bookmarks);

  return (
    <>
      <h1 className="title">Comics</h1>
      <div className="input-search-container">
        <input
          className="input-search input-search-comics"
          type="text"
          placeholder="Search"
          ref={inputRef}
          onChange={handleSearch}
        />
        <select
          className="select-format"
          ref={selectRef}
          onChange={handleSelect}
        >
          <option value="">Select format</option>
          <option value="comic">Comic</option>
          <option value="magazine">Magazine</option>
          <option value="digest">Digest</option>
          <option value="trade paperback">Trade paperback</option>
          <option value="hardcover">Hardcover</option>
          <option value="graphic novel">Graphic Novel</option>
          <option value="hardcover">Hardcover</option>
          <option value="digital comic">Digital comic</option>
          <option value="infinite comic">Infinite comic</option>
        </select>
      </div>
      {loading && <Loader />}
      {!loading && (
        <>
          { comics.data?.count
            ? (
              <>
                <div className="cards-container">
                  {comics && comics.data?.results?.map((item: ResultsEntityComic) => {
                    const mark = checkBookmark(bookmarks, `comic${item.id}`);
                    const hidden = (mark) ? mark.hidden : false;
                    return (
                      <Card
                        key={item.id}
                        redirect={`/comics/${item.id}`}
                        path={`${item.thumbnail.path}/portrait_incredible`}
                        title={item.title}
                        extension={item.thumbnail.extension}
                        mark={mark}
                        customClass={hidden ? 'd-none' : ''}
                      />
                    );
                  })}
                </div>
                <div>
                  <Pagination
                    perPage={20}
                    total={comics.data?.total}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              </>
            )
            : <p className="no-results"> No results found.</p>}
        </>
      )}

    </>
  );
};

export default Comics;
