import React from "react";

import { useQueryParamsStoreInit } from "@store/RootStore/hooks/useQueryParamsStoreInit";
import * as Router from "react-router-dom";

import s from "./ProductsLayout.module.scss";

const ProductsLayout: React.FC = () => {
  useQueryParamsStoreInit();

  return (
    <div className={s.products}>
      <div className={s.products__head}>
        <h1 className={s.head__title}>Products</h1>
        <p className={s.head__info}>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
      </div>
      <Router.Outlet />
    </div>
  );
};

export default ProductsLayout;
