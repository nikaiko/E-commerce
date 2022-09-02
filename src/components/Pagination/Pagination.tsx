import React from "react";

import { useSearchParams } from "react-router-dom";

type PaginationProps = {
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({ className }) => {
  const [pageParams, setPageParams] = useSearchParams();
  const [page, setPage] = React.useState(pageParams.get("page") || "");

  const handleClick = () => {
    page ? setPageParams({ page }) : setPageParams({});
  };

  const handleChange = (e: any) => {
    setPage(e.target.value || "");
  };

  return (
    <div className={className}>
      <input type="text" value={page} onChange={handleChange} />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Pagination;
