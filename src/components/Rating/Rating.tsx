import React from "react";

import Counter from "@components/Counter";

import styles from "./Rating.module.scss";

type RatingProps = {
  rate?: number;
  count?: number;
  className?: string;
};

const Rating: React.FC<RatingProps> = ({ rate, count, className }) => {
  return (
    <div className={className}>
      {count ? (
        <div className={styles.rating}>
          {[...Array(5)].map((__, id) => {
            id += 1;
            return (
              <div
                key={id}
                className={
                  id <= (rate || 0)
                    ? styles.rating__star_on
                    : styles.rating__star_off
                }
              >
                &#9733;
              </div>
            );
          })}
          <h5>{rate}</h5>
          <Counter count={count} />
        </div>
      ) : (
        <div className={styles.rating}>
          <div className={styles.rating__star_on}>&#9733;</div>
          <h3>{rate}</h3>
        </div>
      )}
    </div>
  );
};

export default Rating;
