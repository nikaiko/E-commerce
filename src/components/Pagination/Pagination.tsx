import React from "react";

import cn from "classnames";
import { useSearchParams } from "react-router-dom";

import { usePagination, DOTS } from "./hooks/usePagination";
import s from "./Pagination.module.scss";

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  currentPage: number;
  pageSize?: number;
  siblingCount?: number;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize = 6,
  className = "",
}) => {
  const paginationRange = usePagination(
    totalCount,
    pageSize,
    siblingCount,
    currentPage
  );

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrev = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={cn(s.pagination, className)}>
      <li
        className={cn(s.pagination__arrow, currentPage === 1 && s.disabled)}
        onClick={onPrev}
      >
        <div className={cn(s.arrow, s["arrow-left"])} />
      </li>

      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className={cn(s.pagination__item, s.dots)}>&#8230;</li>;
        }

        return (
          <li
            key={pageNumber}
            className={cn(
              s.pagination__item,
              pageNumber === currentPage && s.selected
            )}
            onClick={() => onPageChange(+pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={cn(
          s.pagination__arrow,
          currentPage === lastPage && s.disabled
        )}
        onClick={onNext}
      >
        <div className={cn(s.arrow, s["arrow-right"])} />
      </li>
    </ul>
  );
};

export default Pagination;
