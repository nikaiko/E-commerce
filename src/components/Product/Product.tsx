import React from "react";

import Button from "@components/Button";
import { ButtonColor } from "@components/Button/Button";
import Rating from "@components/Rating";
import ReadMoreLess from "@components/ReadMoreLess";
import ProductModel from "@models/ProductModel";

import s from "./Product.module.scss";
import ProductSkeleton from "./ProductSkeleton";

type ProductProps = {
  product: ProductModel | null;
  loading?: boolean;
};

const Product: React.FC<ProductProps> = ({ product, loading = false }) => {
  if (loading) {
    return <ProductSkeleton />;
  }

  return (
    <div className={s.product}>
      <img
        src={product?.image}
        alt="product-item"
        className={s.product__image}
      />
      <div className={s.product__info}>
        <h2 className={s.product__title}>{product?.title}</h2>
        <div className={s.product__category}>{product?.category}</div>
        <Rating
          rate={product?.rating.rate}
          count={product?.rating.count}
          className={s.product__rating}
        />
        <ReadMoreLess
          text={product?.description}
          className={s.product__description}
        />
        <h2 className={s.product__price}>${product?.price}</h2>
        <div className={s.product__buttons}>
          <Button>Buy Now</Button>
          <Button color={ButtonColor.secondary}>Add to Chart</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
