import React from "react";

import cn from "classnames";

import s from "./Counter.module.scss";

type CounterProps = {
  count: number;
  className?: string;
};

const Counter: React.FC<CounterProps> = ({ count, className }) => {
  return <span className={cn(s.counter, className)}>{count}</span>;
};

export default React.memo(Counter);
