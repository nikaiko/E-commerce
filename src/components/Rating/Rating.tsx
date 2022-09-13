import React from "react";

import Counter from "@components/Counter";
import range from "@utils/range";

import Star from "./components/Star";
import s from "./Rating.module.scss";

type RatingProps = {
  rate?: number;
  count?: number;
  className?: string;
};

const Rating: React.FC<RatingProps> = ({ rate = 0, count, className }) => {
  const stars = React.useMemo(
    () => range(1, 5).map((idx) => <Star key={idx} mode={idx <= rate} />),
    [rate]
  );

  return (
    <div className={className}>
      {count ? (
        <div className={s.rating}>
          {stars}
          <h5>{rate}</h5>
          <Counter count={count} />
        </div>
      ) : (
        <div className={s.rating}>
          <Star />
          <h3>{rate}</h3>
        </div>
      )}
    </div>
  );
};

export default Rating;
