import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { setBookmarks } from '../../redux/actions/bookmarkActions';
import { TBookmark } from '../../types/TBookmark';
import AppRouter from '../router/AppRouter';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const [stateBookmarks] = useLocalStorage<Array<TBookmark>>('bookmarks', []);

  useEffect(() => {
    dispatch(setBookmarks(stateBookmarks));
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
