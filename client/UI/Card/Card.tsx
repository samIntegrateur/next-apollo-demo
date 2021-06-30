import React from 'react';
import classes from './Card.module.css';

interface CardProps {
  cardTitle?: string;
}

const Card: React.FC<CardProps> = ({ children, cardTitle }) => {
  return (
    <article className={classes.card}>
      {cardTitle && <h2 className={classes.card__title}>{cardTitle}</h2>}
      <div className={classes.card__content}>{children}</div>
    </article>
  );
};

export default Card;
