import React from "react";

import useIsDesktop from "@utils/useIsDesktop";
import ContentLoader from "react-content-loader";

const CardSkeleton: React.FC = () => {
  const isDesktop = useIsDesktop();

  return isDesktop ? (
    <ContentLoader
      speed={2}
      width={394}
      height={500}
      viewBox="0 0 394 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="394" height="360" />
      <rect x="0" y="385" rx="10" ry="10" width="100" height="24" />
      <rect x="0" y="420" rx="10" ry="10" width="394" height="34" />
      <rect x="344" y="470" rx="10" ry="10" width="50" height="30" />
      <rect x="0" y="470" rx="10" ry="10" width="80" height="30" />
    </ContentLoader>
  ) : (
    <ContentLoader
      speed={2}
      width={156}
      height={242}
      viewBox="0 0 156 242"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="156" height="130" />
      <rect x="0" y="156" rx="10" ry="10" width="86" height="20" />
      <rect x="0" y="190" rx="10" ry="10" width="156" height="18" />
      <rect x="124" y="222" rx="10" ry="10" width="32" height="18" />
      <rect x="0" y="222" rx="10" ry="10" width="40" height="18" />
    </ContentLoader>
  );
};

export default CardSkeleton;
