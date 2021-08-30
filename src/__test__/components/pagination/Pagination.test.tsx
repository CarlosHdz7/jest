/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react';
import Pagination from '../../../components/pages/pagination/Pagination';
import '@testing-library/jest-dom';

describe('testing pagination', () => {
  test('pagination should initially 7 buttons', () => {
    const paginate = jest.fn();
    const { container } = render(<Pagination
      currentPage={1}
      perPage={20}
      total={1000}
      paginate={paginate}
    />);

    const numberOfButtons = container.getElementsByClassName('page-item').length;
    expect(numberOfButtons).toBe(7);
  });

  test('pagination should 11 buttons if current page is in the middle', () => {
    const paginate = jest.fn();
    const { container } = render(<Pagination
      currentPage={5}
      perPage={20}
      total={1000}
      paginate={paginate}
    />);

    const numberOfButtons = container.getElementsByClassName('page-item').length;
    expect(numberOfButtons).toBe(11);
  });

  test('pagination should paginate', () => {
    const paginate = jest.fn();
    const { container } = render(<Pagination
      currentPage={5}
      perPage={20}
      total={1000}
      paginate={paginate}
    />);

    fireEvent.click(container.getElementsByClassName('page-link')[2]);
    expect(paginate).toBeCalled();
    expect(paginate).toHaveBeenCalledTimes(1);
  });

  test('next button should be disabled', () => {
    const paginate = jest.fn();
    const { container } = render(<Pagination
      currentPage={78}
      perPage={20}
      total={1559}
      paginate={paginate}
    />);

    expect(container.getElementsByClassName('page-link')[6].classList.contains('page-link-inactive')).toBe(true);
  });

  test('next button should bde enable', () => {
    const paginate = jest.fn();
    const { container } = render(<Pagination
      currentPage={1}
      perPage={20}
      total={1000}
      paginate={paginate}
    />);

    expect(container.getElementsByClassName('page-link')[6].classList.contains('page-link-inactive')).toBe(false);
  });
});
