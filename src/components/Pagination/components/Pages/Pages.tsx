import React from "react";

import Page from "../Page";

type PagesProps = {
  paginationRange: Array<number | string>;
  currentPage: number;
  onPage: (page: number) => void;
};

const Pages: React.FC<PagesProps> = ({
  paginationRange,
  currentPage,
  onPage,
}) => {
  return (
    <>
      {paginationRange.map((pageNumber) => (
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          onPage={onPage}
          currentPage={currentPage}
        />
      ))}
    </>
  );
};

export default Pages;
