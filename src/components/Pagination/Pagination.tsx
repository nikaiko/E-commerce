import React from "react";

import cn from "classnames";

import Pages from "./components/Pages";
import { usePagination } from "./hooks/usePagination";
import s from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  onPage: (page: number) => void;
  siblingCount?: number;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({
  onPage,
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
  className = "",
}) => {
  const handleNext = React.useCallback(() => {
    onPage(currentPage + 1);
  }, [currentPage]);

  const handlePrev = React.useCallback(() => {
    onPage(currentPage - 1);
  }, [currentPage]);

  const paginationRange = usePagination(
    totalCount,
    pageSize,
    siblingCount,
    currentPage
  );

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={cn(s.pagination, className)}>
      <li
        className={cn(
          s.pagination__arrow,
          currentPage === 1 && s.pagination__arrow_disabled
        )}
        onClick={handlePrev}
      >
        <div className={cn(s.arrow, s["arrow-left"])} />
      </li>

      <Pages
        paginationRange={paginationRange}
        currentPage={currentPage}
        onPage={onPage}
      />

      <li
        className={cn(
          s.pagination__arrow,
          currentPage === lastPage && s.pagination__arrow_disabled
        )}
        onClick={handleNext}
      >
        <div className={cn(s.arrow, s["arrow-right"])} />
      </li>
    </ul>
  );
};

export default Pagination;
