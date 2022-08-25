import React from "react";

import Filter from "@components/Filter";
import Search from "@components/Search";

import styles from "./Products.module.scss";

const Products = () => {
  React.useEffect(() => {}, []);

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
      <div className={styles.products__list}>Product cards</div>
      <div className={styles.products__pagination}>Pagination</div>
    </div>
  );
};

export default Products;
