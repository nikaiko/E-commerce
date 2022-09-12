import React from "react";

import Card from "@components/Card";
import ProductModel from "@store/models/ProductModel";

type ListProps = {
  list: ProductModel[];
  className?: string;
};

const List: React.FC<ListProps> = ({ list, className }) => {
  return (
    <div className={className}>
      {list.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
