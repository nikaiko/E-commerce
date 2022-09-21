import React from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      width < 1240 ? setIsDesktop(false) : setIsDesktop(true);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
};

export default useIsDesktop;
