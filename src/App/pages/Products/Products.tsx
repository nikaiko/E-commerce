import React from "react";

import Counter from "@components/Counter";
import Filter from "@components/Filter";
import List from "@components/List";
import Loader from "@components/Loader";
import Pagination from "@components/Pagination";
import Search from "@components/Search";
import ProductsStore from "@store/ProductsStore";
import { useQueryParamsStoreInit } from "@store/RootStore/hooks/useQueryParamsStoreInit";
import log from "@utils/log";
import Meta from "@utils/meta";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "react-router-dom";

import s from "./Products.module.scss";

const Products: React.FC = () => {
  useQueryParamsStoreInit();

  const productsStore = useLocalStore(() => new ProductsStore());
  const [searchParams, setSearchParams] = useSearchParams({});
  const [page, setPage] = React.useState("1");
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    productsStore.getProducts();

    return () => {
      productsStore.destroy();
    };
  }, [productsStore]);

  React.useEffect(() => {
    let params;
    if (title) {
      params = { page, title };
    } else {
      params = { page };
    }
    setSearchParams(params);
  }, [page]);

  const handleClick = () => {
    let params;
    if (title) {
      params = { page: "1", title };
    } else {
      params = { page };
    }
    setSearchParams(params);
  };

  if (productsStore.meta === Meta.loading) {
    return <Loader />;
  }

  return (
    <div className={s.products}>
      <div className={s.products__head}>
        <h1 className={s.head__title}>Products</h1>
        <p className={s.head__info}>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
      </div>
      <div className={s.products__panel}>
        <Search
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          onClick={handleClick}
        />
        <Filter />
      </div>
      <div className={s.products__total}>
        <h2 className={s.total__title}>Total Products</h2>
        <Counter count={productsStore.products.length} />
      </div>
      <List list={productsStore.products} className={s.products__list} />
      <Pagination
        className={s.products__pagination}
        currentPage={+page}
        onPageChange={(number) => setPage(`${number}`)}
        totalCount={productsStore.products.length}
      />
    </div>
  );
};

export default observer(Products);
