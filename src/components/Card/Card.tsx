import React from "react";

import styles from "./Card.module.scss";

export type CardProps = {
  image: string;
  category?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
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
    <div className={styles.card} {...rest}>
      <img
        src={image}
        alt={image}
        className={styles.card__image}
        onClick={onClick}
      />
      <div className={styles.card__description}>
        <h5 className={styles.card__category}>{category}</h5>
        <h3 className={styles.card__title} onClick={onClick}>
          {title}
        </h3>
        <div className={styles.card__subtitle}>{subtitle}</div>
        <h3 className={styles.card__content}>${content}</h3>
      </div>
    </div>
  );
};

export default Card;
