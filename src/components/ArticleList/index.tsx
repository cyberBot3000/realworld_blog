import Article from 'components/Article';
import { Flex } from 'components/ui/Flex';
import { Loader } from 'components/ui/Loader';
import Pagination from 'components/ui/Pagination';
import { Link } from 'react-router-dom';
import { articlesLimit, useArticlesListInternal } from './model';
import './style.scss';

export const ArticlesList = () => {
	const { isError, isLoading, fechedArticles, currPage, pageChangeHandler } = useArticlesListInternal();
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
								<Flex alignItems="fs" justifyContent="sb">
									<Article.Info
										header={
											<Flex alignItems="fs">
												<Link to={`/articles/${article.slug}`}>
													<Article.Title maxViewLength={150} />
												</Link>
												<Article.Favorites />
											</Flex>
										}
										footer={<Article.TagList maxViewLength={50} />}
									/>
									<Article.Author />
								</Flex>
							}
							afterHeader={<Article.Description maxViewLength={340} />}
						/>
					))}
					<Pagination
						totalCount={fechedArticles?.articlesCount ?? 0}
						pageSize={articlesLimit}
						currentPage={currPage}
						onPageChange={pageChangeHandler}
						className="articles-list__pagination"
					/>
				</>
			)}
		</Flex>
	);
};

export default ArticlesList;
