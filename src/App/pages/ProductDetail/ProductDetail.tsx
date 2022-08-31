import React from "react";

import Button from "@components/Button";
import { ButtonColor } from "@components/Button/Button";
import Card from "@components/Card";
import Loader from "@components/Loader";
import Rating from "@components/Rating";
import ReadMoreLess from "@components/ReadMoreLess";
import routes from "@configs/routes";
import ProductModel from "@store/models/ProductModel";
import {
  requestProductsFromCategory,
  requestSingleProduct,
} from "@store/ProductStore/requestProductStore";
import Meta from "@utils/meta";
import { useParams } from "react-router-dom";

import styles from "./ProductDetail.module.scss";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = React.useState<ProductModel | null>(null);
  const [relatedItems, setRelatedItems] = React.useState<ProductModel[]>([]);
  const [meta, setMeta] = React.useState(Meta.initial);

  const { id } = useParams();

  React.useEffect(() => {
    setMeta(Meta.loading);
    setProduct(null);
    setRelatedItems([]);

    requestSingleProduct(id)
      .then((response) => {
        if (response.isError) {
          setMeta(Meta.error);
          return;
        }

        setProduct(response.data);
        return requestProductsFromCategory(response.data.category);
      })
      .then((response) => {
        if (response?.isError || !response?.data) {
          setMeta(Meta.error);
          return;
        }

        setRelatedItems(response.data);
        setMeta(Meta.success);
      });
  }, [id]);

  if (meta === Meta.loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className={styles.product}>
        <img
          src={product?.image}
          alt={product?.image}
          className={styles.product__image}
        />
        <div className={styles.product__info}>
          <h2 className={styles.product__title}>{product?.title}</h2>
          <div className={styles.product__category}>{product?.category}</div>
          <Rating
            rate={product?.rating.rate}
            count={product?.rating.count}
            className={styles.product__rating}
          />
          <ReadMoreLess
            text={product?.description}
            className={styles.product__description}
          />
          <h2 className={styles.product__price}>${product?.price}</h2>
          <div className={styles.product__buttons}>
            <Button>Buy Now</Button>
            <Button color={ButtonColor.secondary}>Add to Chart</Button>
          </div>
        </div>
      </div>
      <div className={styles.relatedItems}>
        <h5 className={styles.relatedItems__title}>Related Items</h5>
        <div className={styles.relatedItems__list}>
          {relatedItems
            .filter((item) => item.id !== product?.id)
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

export default ProductDetail;
