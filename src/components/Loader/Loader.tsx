import React from "react";

import "./Loader.scss";

import LoaderSize from "@configs/LoaderSize";
import classNames from "classnames";

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
    <div className={classNames("loader", `loader_size-${size}`, className)} />
  ) : null;
};

export default Loader;
