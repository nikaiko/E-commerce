import React from "react";

import classNames from "classnames";
import "./Loader.scss";

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
    <div
      className={classNames("loader", `loader_size-${size}`, `${className}`)}
    />
  ) : null;
};

export default Loader;
