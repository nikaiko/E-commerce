import React from "react";

import { DOTS } from "@components/Pagination/hooks/usePagination";
import cn from "classnames";

import s from "./Page.module.scss";

type PageProps = {
  pageNumber: string | number;
  onPage: (page: number) => void;
  currentPage: number;
};

const Page: React.FC<PageProps> = ({ pageNumber, currentPage, onPage }) => {
  const handleClick = React.useCallback(() => {
    onPage(pageNumber as number);
  }, [pageNumber]);

  if (pageNumber === DOTS) {
    return <li className={cn(s.page, s.dots)}>&#8230;</li>;
  }

  return (
    <li
      className={cn(s.page, pageNumber === currentPage && s.page_selected)}
      onClick={handleClick}
    >
      {pageNumber}
    </li>
  );
};

export default Page;
