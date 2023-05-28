import { usePagination } from 'components/ui/Pagination';
import { useFetchArticlesQuery } from 'service';
export const articlesLimit = 5;

export const useArticlesListInternal = () => {
	const { currPage, pageChangeHandler } = usePagination();
	const {
		data: fechedArticles,
		isLoading,
		isError,
	} = useFetchArticlesQuery(
		{
			author: '',
			favorited: '',
			tag: '',
			limit: articlesLimit,
			offset: articlesLimit * (currPage ? currPage : 1),
		},
		{
			skip: currPage === undefined,
		}
	);

	return { fechedArticles, isLoading, isError, currPage, pageChangeHandler };
};
