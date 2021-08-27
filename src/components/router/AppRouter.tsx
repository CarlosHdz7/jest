import React from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from '../navbar';
import Characters from '../pages/characters';
import Comics from '../pages/comics';
import Home from '../pages/home';
import Stories from '../pages/stories';
import routesPath from './routes';
import Comic from '../pages/comic';
import Character from '../pages/character';
import Footer from '../footer';
import Bookmarks from '../pages/bookmarks';
import Story from '../pages/story';

import './AppRouter.scss';
import Error404 from '../pages/404';

const AppRouter = () => (
  <>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path={routesPath.HOME} component={Home} />
        <Route exact path={routesPath.COMICS} component={Comics} />
        <Route exact path={routesPath.COMIC} component={Comic} />
        <Route exact path={routesPath.CHARACTERS} component={Characters} />
        <Route exact path={routesPath.CHARACTER} component={Character} />
        <Route exact path={routesPath.BOOKMARKS} component={Bookmarks} />
        <Route exact path={routesPath.STORIES} component={Stories} />
        <Route exact path={routesPath.STORY} component={Story} />
        <Route exact path={routesPath.ERROR404} component={Error404} />
        <Route component={Error404} />
      </Switch>
    </div>
    <Footer />
  </>
);

export default AppRouter;
