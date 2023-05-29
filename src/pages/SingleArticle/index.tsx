import Article from 'components/Article';
import { Container } from 'components/ui/Container';
import { Flex } from 'components/ui/Flex';
import { Loader } from 'components/ui/Loader';
import { useParams } from 'react-router-dom';
import { useFetchArticleByIdQuery } from 'service';
import './style.scss';

export const SingleArticle = () => {
	const { slug } = useParams();
	if (slug === undefined) {
		throw new Error('ошибка при попытке перехода на страницу статьи');
	}
	const { data: fetchedArticle, isLoading, isError } = useFetchArticleByIdQuery({ slug });

	return (
		<div className="single-article-page">
			<Container className="single-article-page__container">
				{isLoading && <Loader />}
				{!isLoading && isError && (
					<div className="single-article-page__error">произошла ошибка при загрузке статьи</div>
				)}
				{!isLoading && !isError && fetchedArticle && (
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
								<Article.Author />
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
