import React from "react";

import "./Card.scss";

export type CardProps = {
  image: string;
  category?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const Card: React.FC<CardProps> = ({
  image,
  category,
  title,
  subtitle,
  content,
  onClick,
  ...rest
}) => {
  return (
    <div className="card" onClick={onClick} {...rest}>
      <img src={image} alt={image} className="card__image" />
      <div className="card__description">
        <h5 className="card__category">{category}</h5>
        <h3 className="card__title">{title}</h3>
        <div className="card__subtitle">{subtitle}</div>
        <h3 className="card__content">{content}</h3>
      </div>
    </div>
  );
};

export default Card;
