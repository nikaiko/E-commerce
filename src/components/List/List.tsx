import React from "react";

import Card from "@components/Card";
import ProductModel from "@models/ProductModel";

type ListProps = {
  list: ProductModel[];
  className?: string;
};

const List: React.FC<ListProps> = ({ list, className = "" }) => {
  const cards = list.map((item) => <Card item={item} key={item.id} />);

  return (
    <div className={className}>
      {list.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default React.memo(List);
