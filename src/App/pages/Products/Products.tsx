import React from "react";

import Counter from "@components/Counter";
import Filter from "@components/Filter";
import Loader from "@components/Loader";
import Search from "@components/Search";
import ProductsStore from "@store/ProductsStore";
import { useQueryParamsStoreInit } from "@store/RootStore/hooks/useQueryParamsStoreInit";
import log from "@utils/log";
import Meta from "@utils/meta";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";

import List from "./components/List";
import styles from "./Products.module.scss";

const Products: React.FC = () => {
  useQueryParamsStoreInit();

  const productsStore = useLocalStore(() => new ProductsStore());

  React.useEffect(() => {
    productsStore.getProducts();

    return () => {
      productsStore.destroy();
    };
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
      <List list={productsStore.products} />
      <div className={styles.products__pagination}>Pagination</div>
    </div>
  );
};

export default observer(Products);
