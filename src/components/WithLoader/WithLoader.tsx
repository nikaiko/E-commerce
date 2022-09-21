import React from "react";

import Loader from "@components/Loader";
import { LoaderSize } from "@components/Loader/Loader";

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
  className?: string;
}>;

const WithLoader: React.FC<WithLoaderProps> = ({
  loading,
  className = "",
  children,
}) => {
  return (
    <>
      {loading && <Loader size={LoaderSize.s} className={className} />}
      {children}
    </>
  );
};

export default WithLoader;
