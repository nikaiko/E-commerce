import React from "react";

import Card from "@components/Card";
import Counter from "@components/Counter";
import Filter from "@components/Filter";
import Loader from "@components/Loader";
import Rating from "@components/Rating";
import Search from "@components/Search";
import routes from "@configs/routes";
import ProductsStore from "@store/ProductsStore";
import Meta from "@utils/meta";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";

import styles from "./Products.module.scss";

const Products: React.FC = () => {
  const productsStore = useLocalStore(() => new ProductsStore());

  React.useEffect(() => {
    productsStore.getProducts();

    // return () => {
    //   second
    // }
  }, [productsStore]);

  if (productsStore.meta === Meta.loading) {
    return <Loader />;
  }

  return (
    <div className={styles.products}>
      <div className={styles.products__title}>
        <h1>Products</h1>
        <p>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
      </div>
      <div className={styles.products__panel}>
        <Search />
        <Filter />
      </div>
      <div className={styles.products__total}>
        <h2>Total Products</h2>
        <Counter count={productsStore.products.length} />
      </div>
      <div className={styles.products__list}>
        {productsStore.products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            category={product.category}
            title={product.title}
            to={routes.products.detail.createRoot(product.id)}
            content={
              <>
                <h3>${product.price}</h3>
                <Rating rate={product.rating?.rate} />
              </>
            }
          />
        ))}
      </div>
      <div className={styles.products__pagination}>Pagination</div>
    </div>
  );
};

export default observer(Products);
