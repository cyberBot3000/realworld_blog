import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { DOTS_VAL, usePagination } from './model/internal';
import './style.scss';
import { useEffect, useRef, useState } from 'react';

export interface PaginationProps {
	onPageChange?: (currPage: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage?: number;
	pageSize: number;
	className?: string;
}

export const Pagination = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
	className,
}: PaginationProps) => {
	const [internalCurrentPage, setInternalCurrentPage] = useState<number>(currentPage ? currentPage : 1);
	const mounted = useRef(false);
	useEffect(() => {
		if (currentPage !== undefined) setInternalCurrentPage(currentPage);
	}, [currentPage]);
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}
		onPageChange?.(internalCurrentPage);
	}, [internalCurrentPage]);
	const paginationRange = usePagination({
		currentPage: internalCurrentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const changeHandler = (page: number) => {
		setInternalCurrentPage(page);
	};

	const onNext = () => {
		setInternalCurrentPage(prevVal => prevVal + 1);
	};

	const onPrevious = () => {
		setInternalCurrentPage(prevVal => prevVal - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1].value;
	return (
		<ul className={`pagination ${className}`}>
			<li
				className={`pagination__item ${internalCurrentPage === 1 ? 'pagination__item_disabled' : ''}`}
				onClick={onPrevious}
			>
				<GrFormPrevious />
			</li>
			{paginationRange.map(pageElem => {
				if (pageElem.value === DOTS_VAL) {
					return (
						<li key={pageElem.key} className="pagination__item pagination__item_dots">
							&#8230;
						</li>
					);
				}

				return (
					<li
						key={pageElem.key}
						className={`pagination__item ${
							internalCurrentPage === pageElem.value ? 'pagination__item_selected' : ''
						}`}
						onClick={() => changeHandler(pageElem.value as number)}
					>
						{pageElem.value}
					</li>
				);
			})}
			<li
				className={`pagination__item ${internalCurrentPage === lastPage ? 'pagination__item_disabled' : ''}`}
				onClick={onNext}
			>
				<GrFormNext />
			</li>
		</ul>
	);
};

export default Pagination;

export * from './model';
