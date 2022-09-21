import React from "react";

import log from "@utils/log";
import useIsDesktop from "@utils/useIsDesktop";
import ContentLoader from "react-content-loader";

const ProductSkeleton: React.FC = () => {
  const isDesktop = useIsDesktop();

  return isDesktop ? (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={600}
      viewBox="0 0 1240 600"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="600" height="600" />
      <rect x="640" y="0" rx="10" ry="10" width="400" height="60" />
      <rect x="640" y="80" rx="10" ry="10" width="150" height="40" />
      <rect x="640" y="150" rx="10" ry="10" width="300" height="60" />
      <rect x="640" y="230" rx="10" ry="10" width="580" height="100" />
      <rect x="640" y="360" rx="10" ry="10" width="150" height="60" />
      <rect x="640" y="470" rx="10" ry="10" width="280" height="60" />
      <rect x="940" y="470" rx="10" ry="10" width="280" height="60" />
    </ContentLoader>
  ) : (
    <ContentLoader
      speed={2}
      width={327}
      height={800}
      viewBox="0 0 327 800"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="327" height="327" />
      <rect x="0" y="360" rx="10" ry="10" width="300" height="40" />
      <rect x="0" y="410" rx="10" ry="10" width="150" height="30" />
      <rect x="0" y="520" rx="10" ry="10" width="327" height="60" />
      <rect x="0" y="600" rx="10" ry="10" width="100" height="30" />
      <rect x="0" y="660" rx="10" ry="10" width="327" height="60" />
      <rect x="0" y="470" rx="10" ry="10" width="200" height="35" />
      <rect x="0" y="741" rx="10" ry="10" width="327" height="60" />
    </ContentLoader>
  );
};

export default ProductSkeleton;
