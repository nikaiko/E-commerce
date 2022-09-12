import React from "react";

import cn from "classnames";

import s from "./Star.module.scss";

type StarProps = {
  mode?: boolean;
  className?: string;
};

const Star: React.FC<StarProps> = ({ mode = true, className }) => {
  return (
    <div className={cn(s[`star_${mode ? "on" : "off"}`], className)}>
      &#9733;
    </div>
  );
};

export default Star;
