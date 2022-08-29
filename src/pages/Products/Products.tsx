import React from "react";

import ProductApi from "@api/ProductApi";
import Card from "@components/Card";
import Counter from "@components/Counter";
import Filter from "@components/Filter";
import Rating from "@components/Rating";
import Search from "@components/Search";
import ROUTES from "@configs/routes";
import IProduct from "@entities/IProduct";
import { useNavigate } from "react-router-dom";

import styles from "./Products.module.scss";

const Products: React.FC = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [total, setTotal] = React.useState<number>(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    ProductApi.fetchProducts().then((data: IProduct[]) => {
      setProducts(data);
      setTotal(data.length);
    });
  }, []);

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
        <Counter count={total} />
      </div>
      <div className={styles.products__list}>
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            category={product.category}
            title={product.title}
            content={
              <>
                <h3>${product.price}</h3>
                <Rating rate={product.rating?.rate} />
              </>
            }
            onClick={() => navigate(`/${ROUTES.PRODUCTS}/${product.id}`)}
          />
        ))}
      </div>
      <div className={styles.products__pagination}>Pagination</div>
    </div>
  );
};

export default Products;
