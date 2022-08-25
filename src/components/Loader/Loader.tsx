import React from "react";

import LoaderSize from "@configs/LoaderSize";
import classNames from "classnames";

import styles from "./Loader.module.scss";

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
      className={classNames(styles.loader, styles[`loader_${size}`], className)}
    />
  ) : null;
};

export default Loader;
