import React from "react";

import cn from "classnames";

import s from "./NotFound.module.scss";

const NotFound: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = "",
}) => {
  return <div className={cn(s.notfound, className)}>Not Found</div>;
};

export default NotFound;
