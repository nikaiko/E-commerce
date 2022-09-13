import React from "react";

import s from "./Counter.module.scss";

type CounterProps = {
  count: number;
};

const Counter: React.FC<CounterProps> = ({ count }) => {
  return <span className={s.counter}>{count}</span>;
};

export default React.memo(Counter);
