import React from "react";

import cn from "classnames";

import s from "./Loader.module.scss";

export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size = LoaderSize.m,
  className = "",
}) => {
  return loading ? (
    <div className={cn(s.loader, s[`loader_${size}`], className)} />
  ) : null;
};

export default Loader;
