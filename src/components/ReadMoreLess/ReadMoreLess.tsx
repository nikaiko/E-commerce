import React from "react";

import cn from "classnames";

import s from "./ReadMoreLess.module.scss";

type ReadMoreLessProps = {
  text?: string;
  limit?: number;
  className?: string;
};

const ReadMoreLess: React.FC<ReadMoreLessProps> = ({
  text = "",
  limit = 100,
  className = "",
}) => {
  const [show, setShow] = React.useState(false);

  const isBig = text ? text.length > limit : false;

  const handleClick = React.useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <div className={cn(s.readmoreless, className)}>
      {isBig ? (
        <>
          {show ? `${text} ` : `${text?.substring(0, limit)}... `}
          <button onClick={handleClick} className={s.readmoreless__button}>
            {show ? "Read Less " : "Read More"}
          </button>
        </>
      ) : (
        text
      )}
    </div>
  );
};

export default ReadMoreLess;
