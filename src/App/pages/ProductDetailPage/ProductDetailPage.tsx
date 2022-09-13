import React from "react";

import Button from "@components/Button";
import { ButtonColor } from "@components/Button/Button";
import List from "@components/List";
import Loader from "@components/Loader";
import Rating from "@components/Rating";
import ReadMoreLess from "@components/ReadMoreLess";
import ProductDetailStore from "@store/ProductDetailStore";
import log from "@utils/log";
import Meta from "@utils/meta";
import useLocalStore from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import s from "./ProductDetailPage.module.scss";

const ProductDetailPage: React.FC = () => {
  const productDetailStore = useLocalStore(() => new ProductDetailStore());
  const { id } = useParams();

  React.useEffect(() => {
    productDetailStore.getProducts(id);
  }, [id, productDetailStore]);

  if (productDetailStore.meta === Meta.loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className={s.product}>
        <img
          src={productDetailStore.currentProduct?.image}
          alt="product-item"
          className={s.product__image}
        />
        <div className={s.product__info}>
          <h2 className={s.product__title}>
            {productDetailStore.currentProduct?.title}
          </h2>
          <div className={s.product__category}>
            {productDetailStore.currentProduct?.category}
          </div>
          <Rating
            rate={productDetailStore.currentProduct?.rating.rate}
            count={productDetailStore.currentProduct?.rating.count}
            className={s.product__rating}
          />
          <ReadMoreLess
            text={productDetailStore.currentProduct?.description}
            className={s.product__description}
          />
          <h2 className={s.product__price}>
            ${productDetailStore.currentProduct?.price}
          </h2>
          <div className={s.product__buttons}>
            <Button>Buy Now</Button>
            <Button color={ButtonColor.secondary}>Add to Chart</Button>
          </div>
        </div>
      </div>
      <div className={s.relatedItems}>
        <h5>Related Items</h5>
        <List
          list={productDetailStore.relatedProducts}
          className={s.relatedItems__list}
        />
      </div>
    </div>
  );
};

export default observer(ProductDetailPage);
