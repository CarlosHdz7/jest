import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routesPath from '../router/routes';
import './Navbar.scss';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => setShowSidebar(!showSidebar);
  return (
    <>
      <div className="banner">
        <img
          className="banner-img"
          src="/images/logo3.svg"
          alt=""
        />
      </div>
      <div className="navbar">
        <div className="navbar-logo">
          <button type="button" onClick={handleShowSidebar}>
            <i className="bi bi-list" />
          </button>
        </div>
        <div className="navbar-options">
          <Link className="navbar-option" to={routesPath.HOME}>Home</Link>
          <Link className="navbar-option" to={routesPath.CHARACTERS}>Characters</Link>
          <Link className="navbar-option" to={routesPath.COMICS}>Comics</Link>
          <Link className="navbar-option" to={routesPath.STORIES}>Stories</Link>
          <Link className="navbar-option" to={routesPath.BOOKMARKS}>Bookmarks & Hidden</Link>
        </div>
      </div>
      <div className={showSidebar ? 'side-bar active' : 'side-bar'}>
        <ul className="side-bar-options">
          <li className="option option">
            <button type="button" className="option--close" onClick={handleShowSidebar}>
              <i className="bi bi-x-lg" />
            </button>
          </li>
          <li className="option">
            <Link to={routesPath.HOME} onClick={() => setShowSidebar(!showSidebar)}>
              <i className="icon" />
              <span>Home</span>
            </Link>
          </li>
          <li className="option">
            <Link to={routesPath.CHARACTERS} onClick={() => setShowSidebar(!showSidebar)}>
              <i className="icon" />
              <span>Characters</span>
            </Link>
          </li>
          <li className="option">
            <Link to={routesPath.COMICS} onClick={() => setShowSidebar(!showSidebar)}>
              <i className="icon" />
              <span>Comics</span>
            </Link>
          </li>
          <li className="option">
            <Link to={routesPath.STORIES} onClick={() => setShowSidebar(!showSidebar)}>
              <i className="icon" />
              <span>Stories</span>
            </Link>
          </li>
          <li className="option">
            <Link to={routesPath.BOOKMARKS} onClick={() => setShowSidebar(!showSidebar)}>
              <i className="icon" />
              <span>Bookmarks & Hidden</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
