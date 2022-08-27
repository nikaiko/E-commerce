import React from "react";

type ReadMoreLessProps = {
  text: string;
  limit?: number;
  className?: string;
};

const ReadMoreLess: React.FC<ReadMoreLessProps> = ({
  text,
  limit = 200,
  className,
}) => {
  const [iseReadMoreShown, setIseReadMoreShown] = React.useState(false);

  return (
    <div className={className}>
      {iseReadMoreShown ? text : text.substring(0, 200)}
    </div>
  );
};

export default ReadMoreLess;
