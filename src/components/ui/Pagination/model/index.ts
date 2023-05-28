import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePagination = (onPageChange: (p: number) => void = () => {}) => {
	const [currPage, setCurrPage] = useState<number | undefined>();
	const [URLSearchParams, setURLSearchParams] = useSearchParams();
	useEffect(() => {
		const searchPageNum = Number(URLSearchParams.get('page'));

		if (currPage === searchPageNum) {
			return;
		}
		if (searchPageNum >= 1) {
			setCurrPage(searchPageNum);
			return;
		}
		setCurrPage(1);
	}, [URLSearchParams]);
	const pageChangeHandler = useCallback(
		(p: number) => {
			if (p === currPage || currPage === undefined) {
				return;
			}
			setURLSearchParams({ page: p.toString() });
			onPageChange(p);
		},
		[onPageChange]
	);
	return { currPage, pageChangeHandler };
};
