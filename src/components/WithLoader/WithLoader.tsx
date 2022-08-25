import React from "react";

import Loader from "@components/Loader";
import { LoaderSize } from "@components/Loader/Loader";

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

const WithLoader: React.FC<WithLoaderProps> = ({ loading, children }) => {
  return (
    <>
      {loading && <Loader size={LoaderSize.s} />}
      {children}
    </>
  );
};

export default WithLoader;
