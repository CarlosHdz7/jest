/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import routesPath from '../../../components/router/routes';

describe('testing breadcrumb', () => {
  test('breadcrumb should redirect home', () => {
    const history = createMemoryHistory({ initialEntries: [routesPath.HOME] });
    const { getByText } = render(
      <Router history={history}>
        <Breadcrumb page="characters" redirect="/characters" item="Name test" />
      </Router>,
    );
    fireEvent.click(getByText(/home/i));
    expect(history.location.pathname).toBe(routesPath.HOME);
  });

  test('breadcrumb should redirect characters', () => {
    const history = createMemoryHistory({ initialEntries: [routesPath.HOME] });
    const { getByText } = render(
      <Router history={history}>
        <Breadcrumb page="Characters" redirect="/characters" item="Name test" />
      </Router>,
    );
    fireEvent.click(getByText(/characters/i));
    expect(history.location.pathname).toBe(routesPath.CHARACTERS);
  });

  test('breadcrumb should redirect comics', () => {
    const history = createMemoryHistory({ initialEntries: [routesPath.HOME] });
    const { getByText } = render(
      <Router history={history}>
        <Breadcrumb page="Comics" redirect="/comics" item="Name test" />
      </Router>,
    );
    fireEvent.click(getByText(/comics/i));
    expect(history.location.pathname).toBe(routesPath.COMICS);
  });

  test('breadcrumb should redirect stories', () => {
    const history = createMemoryHistory({ initialEntries: [routesPath.HOME] });
    const { getByText } = render(
      <Router history={history}>
        <Breadcrumb page="Stories" redirect="/stories" item="Name test" />
      </Router>,
    );
    fireEvent.click(getByText(/stories/i));
    expect(history.location.pathname).toBe(routesPath.STORIES);
  });
});
