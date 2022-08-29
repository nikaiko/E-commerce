import React from "react";

import ProductApi from "@api/ProductApi";
import Button from "@components/Button";
import { ButtonColor } from "@components/Button/Button";
import Card from "@components/Card";
import Rating from "@components/Rating";
import ReadMoreLess from "@components/ReadMoreLess";
import ROUTES from "@configs/routes";
import IProduct from "@entities/IProduct";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./ProductDetail.module.scss";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = React.useState<IProduct>();
  const [relatedItems, setRelatedItems] = React.useState<IProduct[]>([]);

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    try {
      ProductApi.fetchProduct(id)
        .then((data) => {
          setProduct(data);
          return data;
        })
        .then((data) => ProductApi.fetchProductsByCategory(data.category))
        .then((data) => setRelatedItems(data));
    } catch (e) {
      alert(e);
    }
  }, [id]);

  if (!product) {
    return <p>Not Found</p>;
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
                content={
                  <>
                    <h3>${item.price}</h3>
                    <Rating rate={item.rating?.rate} />
                  </>
                }
                onClick={() => navigate(`/${ROUTES.PRODUCTS}/${item.id}`)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
