import React from "react";

import Counter from "@components/Counter";
import Filter from "@components/Filter";
import List from "@components/List";
import Pagination from "@components/Pagination";
import Search from "@components/Search";
import ProductsStore from "@store/ProductsStore";
import { useQueryParamsStoreInit } from "@store/RootStore/hooks/useQueryParamsStoreInit";
import Meta from "@utils/meta";
import useLocalStore from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "react-router-dom";

import s from "./ProductsPage.module.scss";

const ProductsPage: React.FC = () => {
  useQueryParamsStoreInit();

  const productsStore = useLocalStore(() => new ProductsStore());
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = React.useState(searchParams.get("page") || "1");
  const [title, setTitle] = React.useState(searchParams.get("title") || "");

  const setSearch = React.useCallback(() => {
    setSearchParams(title ? { title, page } : { page });
  }, [page, title]);

  React.useEffect(() => {
    productsStore.getProducts(title, Number(page));
  }, []);

  React.useEffect(() => {
    setSearch();
  }, [page]);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const handleSubmit = React.useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPage("1");
      setSearch();
    },
    [setSearch]
  );

  const handlePage = React.useCallback((pageNumber: number) => {
    setPage(String(pageNumber));
  }, []);

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
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={productsStore.meta === Meta.loading}
        />
        <Filter />
      </div>
      <div className={s.products__total}>
        <h2 className={s.total__title}>Total Products</h2>
        <Counter count={productsStore.totalCount} />
      </div>
      <List list={productsStore.products} className={s.products__list} />
      <Pagination
        className={s.products__pagination}
        currentPage={Number(page)}
        onPage={handlePage}
        pageSize={productsStore.pageSize}
        totalCount={productsStore.totalCount}
      />
    </div>
  );
};

export default observer(ProductsPage);
