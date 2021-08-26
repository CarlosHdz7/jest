import React from 'react';
import { Link } from 'react-router-dom';
import { TCard } from '../../types/TCard';
import './Card.scss';

const Card = ({
  path, extension, title, redirect, mark, customClass,
}: TCard) => (
  <Link to={redirect} className={`card ${customClass}`}>
    {mark && (
      <span className="mark">
        <i className="bi bi-bookmark-fill" />
      </span>
    )}
    <img
      className="card-img"
      src={`${path}.${extension}`}
      alt=""
    />
    <span className="card-title">{title}</span>
  </Link>
);

export default Card;
