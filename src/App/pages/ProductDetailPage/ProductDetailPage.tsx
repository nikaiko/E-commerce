import React from "react";

import List from "@components/List";
import NotFound from "@components/NotFound";
import Product from "@components/Product";
import ProductDetailStore from "@store/ProductDetailStore";
import Meta from "@utils/meta";
import useLocalStore from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import s from "./ProductDetailPage.module.scss";

const ProductDetailPage: React.FC = () => {
  const productDetailStore = useLocalStore(() => new ProductDetailStore());
  const { id } = useParams();

  React.useEffect(() => {
    productDetailStore.getProducts(id);
  }, [id]);

  if (productDetailStore.meta === Meta.error) {
    return <NotFound />;
  }

  return (
    <div>
      <Product
        product={productDetailStore.currentProduct}
        loading={productDetailStore.meta === Meta.loading}
      />

      <div className={s.relatedItems}>
        <h5>Related Items</h5>
        <List
          list={productDetailStore.relatedProducts}
          className={s.relatedItems__list}
          loading={productDetailStore.meta === Meta.loading}
        />
      </div>
    </div>
  );
};

export default observer(ProductDetailPage);
