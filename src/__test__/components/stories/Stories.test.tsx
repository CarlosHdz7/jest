/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import store from '../../../redux/store';
import Stories from '../../../components/pages/stories';
import storiesMock from '../../mocks/stories';

describe('testing comics detail', () => {
  it('should show loader', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        stories: {
          list: [],
          loading: true,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/stories'] });

    const { queryByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Stories />
        </Router>
      </Provider>,
    );

    expect(queryByTestId(/loader/i)).toBeTruthy();
  });

  it('should show characters list', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((callback) => callback({
        stories: {
          list: storiesMock,
          loading: false,
          bookmarks: [],
        },
      }));

    const history = createMemoryHistory({ initialEntries: ['/stories'] });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Stories />
        </Router>
      </Provider>,
    );

    expect(getByText('Investigating the murder of a teenage girl, Cage suddenly learns that a three-way gang war is under way for control of the turf')).toBeInTheDocument();
  });
});
