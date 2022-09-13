import React from "react";

import Counter from "@components/Counter";
import Filter from "@components/Filter";
import List from "@components/List";
import Loader from "@components/Loader";
import Pagination from "@components/Pagination";
import Search from "@components/Search";
import ProductsStore from "@store/ProductsStore";
import log from "@utils/log";
import Meta from "@utils/meta";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "react-router-dom";

import s from "./ProductsPage.module.scss";

const ProductsPage: React.FC = () => {
  const productsStore = useLocalStore(() => new ProductsStore());
  const [searchParams, setSearchParams] = useSearchParams({});
  const [page, setPage] = React.useState(searchParams.get("page") || "1");
  const [title, setTitle] = React.useState(searchParams.get("title") || "");

  React.useEffect(() => {
    productsStore.getProducts(title, +page);
  }, [productsStore]);

  React.useEffect(() => {
    setSearchParams(title ? { title, page } : { page });
  }, [page]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPage("1");
    setSearchParams(title ? { title, page } : { page });
  };

  if (productsStore.meta === Meta.loading) {
    return <Loader />;
  }

  return (
    <div className={s.products__content}>
      <div className={s.products__panel}>
        <Search
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          onSubmit={handleSubmit}
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
        currentPage={+page}
        onPageChange={(number) => setPage(`${number}`)}
        pageSize={productsStore.pageSize}
        totalCount={productsStore.totalCount}
      />
    </div>
  );
};

export default observer(ProductsPage);
