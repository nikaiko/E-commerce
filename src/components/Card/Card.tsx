import React from "react";

import Rating from "@components/Rating";
import routes from "@configs/routes";
import ProductModel from "@models/ProductModel";
import { useNavigate } from "react-router-dom";

import s from "./Card.module.scss";

export type CardProps = {
  item: ProductModel;
};

const Card: React.FC<CardProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = React.useCallback(() => {
    navigate(routes.products.detail.createRoot(item?.id));
  }, []);

  return (
    <div className={s.card} onClick={handleClick}>
      <img src={item?.image} alt="product-card" className={s.card__image} />
      <div className={s.card__description}>
        <h5 className={s.card__category}>{item?.category}</h5>
        <h3 className={s.card__title}>{item?.title}</h3>
        <div className={s.card__content}>
          <h3>${item?.price}</h3>
          <Rating rate={item?.rating?.rate} />
        </div>
      </div>
    </div>
  );
};

export default Card;
