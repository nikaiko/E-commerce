import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "./Card.module.scss";

export type CardProps = {
  image: string;
  category?: string;
  to: string;
  title: React.ReactNode;
  content?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  image,
  category,
  to,
  title,
  content,
  ...rest
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(to)} {...rest}>
      <img src={image} alt={image} className={styles.card__image} />
      <div className={styles.card__description}>
        <h5 className={styles.card__category}>{category}</h5>
        <h3 className={styles.card__title}>{title}</h3>
        <div className={styles.card__content}>{content}</div>
      </div>
    </div>
  );
};

export default Card;
