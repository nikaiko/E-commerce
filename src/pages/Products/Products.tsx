import React from "react";

import Card from "@components/Card";
import Filter from "@components/Filter";
import Search from "@components/Search";
import API_ENDPOINTS from "@configs/api";
import ROUTES from "@configs/routes";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./Products.module.scss";

export type ProductProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const Products = () => {
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  const [total, setTotal] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetch = async () => {
      const result = await axios.get<ProductProps[]>(API_ENDPOINTS.PRODUCTS);
      setProducts(result.data);
      setTotal(result.data.length);
    };

    fetch();
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
        <span>{total}</span>
      </div>
      <div className={styles.products__list}>
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            category={product.category}
            title={product.title}
            content={product.price}
            onClick={() => navigate(`${ROUTES.PRODUCTS}/${product.id}`)}
          />
        ))}
      </div>
      <div className={styles.products__pagination}>Pagination</div>
    </div>
  );
};

export default Products;
