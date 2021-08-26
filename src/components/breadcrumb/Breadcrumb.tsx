import React from 'react';
import { Link } from 'react-router-dom';
import { TBreadcrumb } from '../../types/TBreadcrumb';
import './Breadcrumb.scss';

const Breadcrumb = ({ page, redirect, item }: TBreadcrumb) => (
  <ul className="breadcrumb">
    <li className="breadcrumb-nav">
      <Link to="/" className="breadcrumb-link">
        Home
      </Link>
    </li>
    <li className="breadcrumb-nav">
      <Link to={redirect} className="breadcrumb-link">
        {page}
      </Link>
    </li>
    <li className="breadcrumb-nav">{item}</li>
  </ul>
);

export default Breadcrumb;
