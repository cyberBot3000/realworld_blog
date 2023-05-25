import Article from 'components/Article';
import { Flex } from 'components/ui/Flex';
import { Loader } from 'components/ui/Loader';
import Pagination from 'components/ui/Pagination';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import React from 'react';
import { useFetchArticlesQuery } from 'service';
import { changePage } from 'store';
import './style.scss';
import { Link } from 'react-router-dom';

const articlesLimit = 5;

export const ArticlesList = () => {
	const { currPage } = useAppSelector(state => state.articlesPaginationChanger);
	const dispatch = useAppDispatch();
	const {
		data: fechedArticles,
		isLoading,
		isError,
	} = useFetchArticlesQuery({
		author: '',
		favorited: '',
		tag: '',
		limit: articlesLimit,
		offset: articlesLimit * currPage,
	});
	return (
		<Flex className="articles-list" direction="c">
			{isLoading && <Loader />}
			{!isLoading && isError && <div className="home-page__error">произошла ошибка при загрузке билетов</div>}
			{!isLoading && !isError && (
				<>
					{fechedArticles?.articles.map(article => (
						<Article
							key={article.slug}
							article={article}
							header={
								<Flex alignItems="c" justifyContent="sb">
									<Article.Info
										header={
											<Flex alignItems="c">
												<Link to={`/articles/${article.slug}`}>
													<Article.Title />
												</Link>
												<Article.Favorites />
											</Flex>
										}
										footer={<Article.TagList />}
									/>
									<Article.Author />
								</Flex>
							}
							afterHeader={<Article.Description />}
						/>
					))}
					<Pagination
						totalCount={fechedArticles?.articlesCount ?? 0}
						pageSize={articlesLimit}
						currentPage={currPage}
						onPageChange={p => dispatch(changePage(p))}
						className="articles-list__pagination"
					/>
				</>
			)}
		</Flex>
	);
};

export default ArticlesList;
