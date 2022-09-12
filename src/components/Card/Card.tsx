import React from "react";

import Rating from "@components/Rating";
import routes from "@configs/routes";
import ProductModel from "@models/ProductModel";
import { useNavigate } from "react-router-dom";

import s from "./Card.module.scss";

export type CardProps = {
  item: ProductModel;
};

const Card: React.FC<CardProps> = ({
  item: { id, image, category, title, price, rating },
  ...rest
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={s.card}
      onClick={() => navigate(routes.products.detail.createRoot(id))}
      {...rest}
    >
      <img src={image} alt={image} className={s.card__image} />
      <div className={s.card__description}>
        <h5 className={s.card__category}>{category}</h5>
        <h3 className={s.card__title}>{title}</h3>
        <div className={s.card__content}>
          <h3>${price}</h3>
          <Rating rate={rating?.rate} />
        </div>
      </div>
    </div>
  );
};

export default Card;
