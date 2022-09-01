import React from "react";

import Button from "@components/Button";
import { ButtonColor } from "@components/Button/Button";
import Card from "@components/Card";
import Loader from "@components/Loader";
import Rating from "@components/Rating";
import ReadMoreLess from "@components/ReadMoreLess";
import routes from "@configs/routes";
import ProductDetailStore from "@store/ProductDetailStore";
import log from "@utils/log";
import Meta from "@utils/meta";
import { useLocalStore } from "@utils/useLocalStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import s from "./ProductDetail.module.scss";

const ProductDetail: React.FC = () => {
  // const [product, setProduct] = React.useState<ProductModel | null>(null);
  // const [relatedItems, setRelatedItems] = React.useState<ProductModel[]>([]);
  // const [meta, setMeta] = React.useState(Meta.initial);
  const productDetailStore = useLocalStore(() => new ProductDetailStore());
  const { id } = useParams();

  React.useEffect(() => {
    productDetailStore.getProduct(id);
    log(toJS(productDetailStore.relatedProducts));
  }, [id, productDetailStore]);

  if (productDetailStore.meta === Meta.loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className={s.product}>
        <img
          src={productDetailStore.product?.image}
          alt={productDetailStore.product?.image}
          className={s.product__image}
        />
        <div className={s.product__info}>
          <h2 className={s.product__title}>
            {productDetailStore.product?.title}
          </h2>
          <div className={s.product__category}>
            {productDetailStore.product?.category}
          </div>
          <Rating
            rate={productDetailStore.product?.rating.rate}
            count={productDetailStore.product?.rating.count}
            className={s.product__rating}
          />
          <ReadMoreLess
            text={productDetailStore.product?.description}
            className={s.product__description}
          />
          <h2 className={s.product__price}>
            ${productDetailStore.product?.price}
          </h2>
          <div className={s.product__buttons}>
            <Button>Buy Now</Button>
            <Button color={ButtonColor.secondary}>Add to Chart</Button>
          </div>
        </div>
      </div>
      <div className={s.relatedItems}>
        <h5 className={s.relatedItems__title}>Related Items</h5>
        <div className={s.relatedItems__list}>
          {productDetailStore.relatedProducts
            .filter((item) => item.id !== productDetailStore.product?.id)
            .map((item) => (
              <Card
                key={item.id}
                image={item.image}
                category={item.category}
                title={item.title}
                to={routes.products.detail.createRoot(item.id)}
                content={
                  <>
                    <h3>${item.price}</h3>
                    <Rating rate={item.rating?.rate} />
                  </>
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default observer(ProductDetail);
