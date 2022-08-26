import React from "react";

import Rating from "@components/Rating";

import styles from "./ProductsDetail.module.scss";

const ProductDetail = () => {
  const data = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  return (
    <div className={styles.product}>
      <img
        src={data.image}
        alt={data.image}
        className={styles.product__image}
      />
      <div className={styles.product__description}>
        <h2 className={styles.product__title}>{data.title} </h2>
        <div className={styles.product__subtitle}>subtitle </div>
        <Rating rate={data.rating.rate} count={data.rating.count} />
      </div>
    </div>
  );
};

export default ProductDetail;
