import React from "react";

import styles from "./Counter.module.scss";

type CounterProps = {
  count: number;
};

const Counter: React.FC<CounterProps> = ({ count }) => {
  return <span className={styles.counter}>{count}</span>;
};

export default Counter;
