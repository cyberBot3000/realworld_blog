import Article from 'components/Article';
import { Container } from 'components/ui/Container';
import { Flex } from 'components/ui/Flex';
import { Loader } from 'components/ui/Loader';
import { useParams } from 'react-router-dom';
import { useFetchArticleByIdQuery, useFetchCurrentUserQuery } from 'service';
import './style.scss';

export const SingleArticle = () => {
	const { slug } = useParams();
	if (slug === undefined) {
		throw new Error('ошибка при попытке перехода на страницу статьи');
	}
	const { data: fetchedArticle, isLoading, isError } = useFetchArticleByIdQuery({ slug });
	const { data: currUserData, isLoading: currUserIsLoading } = useFetchCurrentUserQuery(undefined);

	return (
		<div className="single-article-page">
			<Container className="single-article-page__container">
				{isLoading && <Loader />}
				{isError && <div className="single-article-page__error">произошла ошибка при загрузке статьи</div>}
				{fetchedArticle && (
					<Article
						article={fetchedArticle.article}
						header={
							<Flex alignItems="fs" justifyContent="sb">
								<Article.Info
									header={
										<Flex alignItems="fs">
											<Article.Title />
											<Article.Favorites />
										</Flex>
									}
									footer={<Article.TagList />}
								/>
								<div className="single-article-page__article-header-right">
									<Article.Author />
									{!currUserIsLoading &&
										currUserData &&
										currUserData.user.username === fetchedArticle.article.author.username && (
											<Flex
												alignItems="c"
												justifyContent="fe"
												className="single-article-page__article-actions"
											>
												<Article.DeleteBtn />
												<Article.UpdateBtn />
											</Flex>
										)}
								</div>
							</Flex>
						}
						afterHeader={<Article.Description />}
						body={<Article.Body />}
					/>
				)}
			</Container>
		</div>
	);
};
