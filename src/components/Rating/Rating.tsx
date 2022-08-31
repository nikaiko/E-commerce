import React from "react";

import Counter from "@components/Counter";
import range from "@utils/range";

import Star from "./components/Star";
import styles from "./Rating.module.scss";

type RatingProps = {
  rate?: number;
  count?: number;
  className?: string;
};

const Rating: React.FC<RatingProps> = ({ rate = 0, count, className }) => {
  return (
    <div className={className}>
      {count ? (
        <div className={styles.rating}>
          {range(5).map((id) => (
            <Star key={id} mode={++id <= rate} />
          ))}
          <h5>{rate}</h5>
          <Counter count={count} />
        </div>
      ) : (
        <div className={styles.rating}>
          <Star />
          <h3>{rate}</h3>
        </div>
      )}
    </div>
  );
};

export default Rating;
