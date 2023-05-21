import _ from 'lodash';
import { useMemo } from 'react';

export const DOTS_VAL = '...';

export const LeftDots = {
	value: DOTS_VAL,
	key: _.uniqueId('paginationLeftDots'),
};
export const RightDots = {
	value: DOTS_VAL,
	key: _.uniqueId('paginationRightDots'),
};

const range = (start: number, end: number): number[] => {
	let length = end - start + 1;
	return Array.from({ length }, ($, idx) => idx + start);
};

export interface UsePaginationProps {
	totalCount: number;
	pageSize: number;
	siblingCount?: number;
	currentPage: number;
}

export interface PaginationItem {
	value: string | number;
	key: string;
}

export const usePagination = ({
	totalCount,
	pageSize,
	siblingCount = 1,
	currentPage,
}: UsePaginationProps): PaginationItem[] => {
	const allNumberValues = useMemo<PaginationItem[]>(() => {
		const totalPageCount = Math.ceil(totalCount / pageSize);
		return range(1, totalPageCount - 1).map(elem => ({ value: elem, key: _.uniqueId('paginationElem') }));
	}, [totalCount, pageSize]);
	const paginationRange = useMemo<PaginationItem[]>(() => {
		const totalPageCount = allNumberValues.length;

		const totalPageNumbers = siblingCount + 5;

		if (totalPageNumbers >= totalPageCount) {
			return allNumberValues.slice(0, totalPageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1;

		const firstPageElem = allNumberValues[0];
		const lastPageElem = allNumberValues[allNumberValues.length - 1];

		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = allNumberValues.slice(0, leftItemCount);

			return [...leftRange, RightDots, lastPageElem];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = allNumberValues.slice(totalPageCount - rightItemCount + 1, totalPageCount);
			return [firstPageElem, LeftDots, ...rightRange];
		}

		let middleRange = allNumberValues.slice(leftSiblingIndex - 1, rightSiblingIndex);
		return [firstPageElem, LeftDots, ...middleRange, RightDots, lastPageElem];
	}, [allNumberValues, siblingCount, currentPage]);

	return paginationRange;
};
