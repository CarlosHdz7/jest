/* eslint-disable jest/expect-expect */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import Card from '../../../components/card/Card';
import '@testing-library/jest-dom';
import renderWithWrapper from '../../utils/Wrapper';
import { comicMock } from '../../mocks/comics';

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

  test('should have mark', () => {
    const { container } = renderWithWrapper(<Card
      path={`${comicMock.thumbnail.path}/portrait_incredible`}
      extension={comicMock.thumbnail.extension}
      title={comicMock.title}
      redirect={`/comics/${comicMock.id}`}
      mark
      customClass="my-class"
    />);
    expect(container.getElementsByClassName('mark')[0]).toBeTruthy();
  });
});
