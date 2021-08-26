/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
import React, {
  useEffect, useState, useRef, MutableRefObject,
} from 'react';

import _ from 'lodash';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ICharacter, ResultsEntityCharacter } from '../../../interfaces/ICharacter';
import { getCharacters, cleanCharacters } from '../../../redux/actions/characterActions';
import Card from '../../card';
import Loader from '../../loader';
import './Characters.scss';
import Pagination from '../pagination';
import checkBookmark from '../../../helpers/checkBookmark';
import { RootState } from '../../../redux/reducers';
import { TBookmark } from '../../../types/TBookmark';
import Select from '../../select';
import { cleanComics, getComics } from '../../../redux/actions/comicsActions';
import { IComic } from '../../../interfaces/IComic';
import { IStory } from '../../../interfaces/IStory';
import { cleanStories, getStories } from '../../../redux/actions/storyActions';
import { TSelectItem } from '../../../types/TSelectItem';

const Characters = ({ location, history }: RouteComponentProps) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const selectRef = useRef() as MutableRefObject<HTMLSelectElement>;
  const selectRef2 = useRef() as MutableRefObject<HTMLSelectElement>;
  const dispatch = useDispatch();

  const params = new URLSearchParams(location.search);
  const page = params.get('page') || '1';
  const name = params.get('name') || '';
  const comic = params.get('comics') || '';
  const storiesQ = params.get('stories') || '';

  const offset = (parseInt(page, 10) - 1) * 20;
  const [currentPage, setCurrentPage] = useState(Number.isNaN(parseInt(page, 10)) && 1);

  useEffect(() => {
    dispatch(getCharacters(offset, name, comic, storiesQ));
    return () => {
      dispatch(cleanCharacters());
    };
  }, [dispatch, offset, name, comic, storiesQ]);

  useEffect(() => {
    dispatch(getComics(0, '', ''));
    return () => {
      dispatch(cleanComics());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStories(1600));
    return () => {
      dispatch(cleanStories());
    };
  }, [dispatch]);

  const buildQuery = (pageQuery: string, nameQuery: string,
    comicQuery : string, storiesQuery: string) => {
    const currentUrlParams = new URLSearchParams(location.search);
    currentUrlParams.set('page', pageQuery);
    (nameQuery)
      ? currentUrlParams.set('name', nameQuery)
      : currentUrlParams.delete('name');
    (comicQuery)
      ? currentUrlParams.set('comics', comicQuery)
      : currentUrlParams.delete('comics');
    (storiesQuery)
      ? currentUrlParams.set('stories', storiesQuery)
      : currentUrlParams.delete('stories');
    return `${window.location.pathname}?${currentUrlParams.toString()}`;
  };

  const paginate = (pageNumber: number) => {
    const query = buildQuery(pageNumber.toString(), name, comic, storiesQ);
    history.push(query);
  };

  const handleSearch = _.debounce(() => {
    const query = buildQuery('1', inputRef.current.value, comic, storiesQ);
    history.push(query);
  }, 1000);

  const handleSelectComics = () => {
    const query = buildQuery('1', name, selectRef.current.value, storiesQ);
    history.push(query);
  };

  const handleSelectStories = () => {
    const query = buildQuery('1', name, comic, selectRef2.current.value);
    history.push(query);
  };

  useEffect(() => {
    inputRef.current.value = name;
  }, [name]);

  useEffect(() => {
    setCurrentPage(Number.isNaN(parseInt(page, 10)) ? 1 : parseInt(page, 10));
  }, [page]);

  const characters: ICharacter = useSelector((state: RootState) => state.characters.list);
  const loading = useSelector((state: RootState) => state.characters.loading);
  const comics: IComic = useSelector((state: RootState) => state.comics.list);
  const loadingComics = useSelector((state: RootState) => state.comics.loading);
  const stories: IStory = useSelector((state: RootState) => state.stories.list);
  const loadingStories = useSelector((state: RootState) => state.stories.loading);

  const bookmarks: Array<TBookmark> = useSelector((state: RootState) => state.bookmarks);
  const selectComics: Array<TSelectItem> = comics.data?.results?.map(
    (item) => ({ key: item.id, value: item.title }),
  );
  const selectStories:Array<TSelectItem> = stories.data?.results?.map(
    (item) => ({ key: item.id, value: item.title.substring(0, 50) }),
  );

  return (
    <>
      <h1 className="title">Characters</h1>
      <div className="input-search-container">
        <input
          className="input-search input-search-character"
          type="text"
          placeholder="Search"
          ref={inputRef}
          onChange={handleSearch}
        />
        { !loadingComics
          && (
          <Select
            data={selectComics}
            defaultValue=""
            title="Select a comic"
            customClass="select-comics"
            selectRef={selectRef}
            onChange={handleSelectComics}
          />
          )}
        { !loadingStories
          && (
          <Select
            data={selectStories}
            defaultValue=""
            title="Select a story"
            customClass="select-stories"
            selectRef={selectRef2}
            onChange={handleSelectStories}
          />
          )}
      </div>
      {loading && <Loader />}
      {!loading && (
        <>
          {characters.data?.count
            ? (
              <>
                <div className="cards-container">
                  {characters.data?.results?.map((item: ResultsEntityCharacter) => {
                    const mark = checkBookmark(bookmarks, `character${item.id}`);
                    const hidden = (mark) ? mark.hidden : false;
                    return (
                      <Card
                        key={item.id}
                        redirect={`/characters/${item.id}`}
                        path={`${item.thumbnail.path}/portrait_incredible`}
                        title={item.name}
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
                    total={characters.data?.total}
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

export default Characters;
