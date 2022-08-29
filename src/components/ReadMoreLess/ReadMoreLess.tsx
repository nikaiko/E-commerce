import React from "react";

import classNames from "classnames";

import styles from "./ReadMoreLess.module.scss";

type ReadMoreLessProps = {
  text: string | undefined;
  limit?: number;
  className?: string;
};

const ReadMoreLess: React.FC<ReadMoreLessProps> = ({
  text,
  limit = 100,
  className,
}) => {
  const [show, setShow] = React.useState(false);

  const isBig = text ? text.length > limit : false;

  return (
    <div className={classNames(styles.readmoreless, className)}>
      {isBig ? (
        <>
          {show ? text + " " : `${text?.substring(0, limit)}... `}
          <button
            onClick={() => setShow(!show)}
            className={styles.readmoreless__button}
          >
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
