import React, {
  useMemo,
} from 'react';
import { IPagination } from '../../../interfaces/IPagination';
import './Pagination.scss';

const Pagination = ({
  currentPage, perPage, total, paginate,
}: IPagination) => {
  const links = 3;
  const page = currentPage;
  const totalPages = Math.ceil(total / perPage);
  const start = ((page - links) > 0) ? page - links : 1;
  const ends = ((page + links) < totalPages) ? page + links : totalPages;

  const pageNumbers = useMemo(() => {
    const pages: Array<number> = [];
    for (let i = start; i <= ends; i += 1) {
      pages.push(i);
    }
    return pages;
  }, [totalPages, page]);

  const handlePaginate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, p: number) => {
    e.preventDefault();
    if (p > 0 && p <= totalPages) {
      paginate(p);
    }
  };

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        <li className="page-item">
          <a
            onClick={(e) => handlePaginate(e, page - 1)}
            href="!#"
            className={page === 1 ? 'page-link page-link-inactive' : 'page-link'}
          >
            <i className="bi bi-caret-left-fill" />
          </a>
        </li>
        { start > 1
        && (
          <li className="page-item">
            <a
              onClick={(e) => { e.preventDefault(); }}
              href="!#"
              className="page-link"
            >
              ...
            </a>
          </li>
        )}
        {pageNumbers.map((number: number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => handlePaginate(e, number)}
              href="!#"
              className={page === number ? 'page-link page-link-active' : 'page-link'}
            >
              {number}
            </a>
          </li>
        ))}

        { ends < totalPages
        && (
          <li className="page-item">
            <a
              onClick={(e) => { e.preventDefault(); }}
              href="!#"
              className="page-link"
            >
              ...
            </a>
          </li>
        )}

        <li className="page-item">
          <a
            onClick={(e) => handlePaginate(e, page + 1)}
            href="!#"
            className={page === totalPages ? 'page-link page-link-inactive' : 'page-link'}
          >
            <i className="bi bi-caret-right-fill" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
