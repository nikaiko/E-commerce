import React from "react";

import Card, { CardSkeleton } from "@components/Card";
import ProductModel from "@models/ProductModel";
import range from "@utils/range";

type ListProps = {
  list: ProductModel[];
  className?: string;
  loading?: boolean;
};

const List: React.FC<ListProps> = ({
  list,
  className = "",
  loading = false,
}) => {
  return (
    <div className={className}>
      {loading
        ? range(1, 3).map((idx) => <CardSkeleton key={idx} />)
        : list.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default React.memo(List);
