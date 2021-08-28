/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable jest/expect-expect */
/* eslint-disable react/react-in-jsx-scope */
// import { render } from '@testing-library/react';
import Card from '../../../components/card/Card';
import '@testing-library/jest-dom';
import renderWithWrapper from '../../utils/Wrapper';
import { comicMock } from '../../mocks/comics';
// import routesPath from '../../../components/router/routes';

describe('testing card', () => {
  test('should render card component', () => {
    const { getByAltText } = renderWithWrapper(<Card
      path={`${comicMock.thumbnail.path}/portrait_incredible`}
      extension={comicMock.thumbnail.extension}
      title={comicMock.title}
      redirect={`/comics/${comicMock.id}`}
      mark={false}
      customClass="my-class"
    />);
    // const regex = new RegExp(comicMock.title, 'i');
    expect(getByAltText(comicMock.title)).toBeTruthy();
  });

  test('should render display title', () => {
    const { getByText } = renderWithWrapper(<Card
      path={`${comicMock.thumbnail.path}/portrait_incredible`}
      extension={comicMock.thumbnail.extension}
      title={comicMock.title}
      redirect={`/comics/${comicMock.id}`}
      mark={false}
      customClass="my-class"
    />);

    // const regex = new RegExp(comicMock.title, 'i');
    expect(getByText(comicMock.title)).toBeTruthy();
  });

  test('should have ref correctly', () => {
    const { container } = renderWithWrapper(<Card
      path={`${comicMock.thumbnail.path}/portrait_incredible`}
      extension={comicMock.thumbnail.extension}
      title={comicMock.title}
      redirect={`/comics/${comicMock.id}`}
      mark={false}
      customClass="my-class"
    />);

    expect(container.getElementsByClassName('my-class')[0].getAttribute('href')).toBe(`/comics/${comicMock.id}`);
  });
});
