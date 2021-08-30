/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */

import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import routesPath from '../../../components/router/routes';
import Navbar from '../../../components/navbar';

describe('testing footer', () => {
  test('Navbar & sidebar should redirect home', () => {
    const history = createMemoryHistory({ initialEntries: [routesPath.HOME] });
    const { getAllByText } = render(
      <Router history={history}>
        <Navbar />
      </Router>,
    );
    fireEvent.click(getAllByText(/home/i)[0]);
    expect(history.location.pathname).toBe(routesPath.HOME);

    fireEvent.click(getAllByText(/home/i)[1]);
    expect(history.location.pathname).toBe(routesPath.HOME);
  });

  test('Navbar & sidebar should redirect characters', () => {
    const history = createMemoryHistory({ initialEntries: [routesPath.CHARACTERS] });
    const { getAllByText } = render(
      <Router history={history}>
        <Navbar />
      </Router>,
    );
    fireEvent.click(getAllByText(/characters/i)[0]);
    expect(history.location.pathname).toBe(routesPath.CHARACTERS);

    fireEvent.click(getAllByText(/characters/i)[1]);
    expect(history.location.pathname).toBe(routesPath.CHARACTERS);
  });

  test('Navbar & sidebar should redirect comics', () => {
    const history = createMemoryHistory({ initialEntries: [routesPath.COMICS] });
    const { getAllByText } = render(
      <Router history={history}>
        <Navbar />
      </Router>,
    );
    fireEvent.click(getAllByText(/comics/i)[0]);
    expect(history.location.pathname).toBe(routesPath.COMICS);

    fireEvent.click(getAllByText(/comics/i)[1]);
    expect(history.location.pathname).toBe(routesPath.COMICS);
  });

  test('Navbar & sidebar should redirect stories', () => {
    const history = createMemoryHistory({ initialEntries: [routesPath.STORIES] });
    const { getAllByText } = render(
      <Router history={history}>
        <Navbar />
      </Router>,
    );
    fireEvent.click(getAllByText(/stories/i)[0]);
    expect(history.location.pathname).toBe(routesPath.STORIES);

    fireEvent.click(getAllByText(/stories/i)[1]);
    expect(history.location.pathname).toBe(routesPath.STORIES);
  });

  test('Navbar & sidebar should redirect bookmarks', () => {
    const history = createMemoryHistory({ initialEntries: [routesPath.BOOKMARKS] });
    const { getAllByText } = render(
      <Router history={history}>
        <Navbar />
      </Router>,
    );
    fireEvent.click(getAllByText(/bookmarks/i)[0]);
    expect(history.location.pathname).toBe(routesPath.BOOKMARKS);

    fireEvent.click(getAllByText(/bookmarks/i)[1]);
    expect(history.location.pathname).toBe(routesPath.BOOKMARKS);
  });

  test('Sidebar should show & hide itself', () => {
    const history = createMemoryHistory({ initialEntries: [routesPath.HOME] });

    const { container, getAllByRole } = render(
      <Router history={history}>
        <Navbar />
      </Router>,
    );

    fireEvent.click(getAllByRole('button')[0]);
    expect(container.getElementsByClassName('side-bar')[0]).toHaveClass('active');
    fireEvent.click(getAllByRole('button')[1]);
    expect(container.getElementsByClassName('side-bar')[0]).not.toHaveClass('active');
  });
});
