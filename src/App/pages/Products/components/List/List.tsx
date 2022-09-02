import React from "react";

import Card from "@components/Card";
import ProductModel from "@store/models/ProductModel";

import s from "./List.module.scss";

type ListProps = {
  list: ProductModel[];
};

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <div className={s.list}>
      {list.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
