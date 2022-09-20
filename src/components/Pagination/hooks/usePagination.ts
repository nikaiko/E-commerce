import React from "react";

import range from "@utils/range";

export const DOTS = "...";

export const usePagination = (
  totalCount: number, //всего данных
  pageSize: number, //кол-во данных на 1 стр
  siblingCount: number = 1, //кол-во кнопок до/после текущей стр
  currentPage: number //текущая страница
) => {
  const paginationRange = React.useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize); //всего стр
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIdx = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIdx = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIdx > 2;
    const shouldShowRightDots = rightSiblingIdx < totalPageCount - 2;

    const firstPageIdx = 1;
    const lastPageIdx = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIdx, DOTS, ...rightRange];
    }

    // if (shouldShowLeftDots && shouldShowRightDots) {
    let midRange = range(leftSiblingIdx, rightSiblingIdx);
    return [firstPageIdx, DOTS, ...midRange, DOTS, lastPageIdx];
    // }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
