import React, { useCallback, useEffect } from 'react';
import './style.scss';
import { Container } from 'components/ui/Container';
import ArticleFormCard from 'components/ArticleFormCard';
import { Flex } from 'components/ui/Flex';
import { useFetchArticleByIdQuery, useSendUpdateArticleMutation } from 'service';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ArticleFormValues } from 'components/ArticleFormCard/types';
import { useParams } from 'react-router-dom';

export const EditArticlePage = () => {
	const [sendUpdateArticle, { isLoading: isSendinig, data: sendArticleData, error: sendArticleError }] =
		useSendUpdateArticleMutation();
	const formMethods = useForm<ArticleFormValues>({ mode: 'all' });
	const { slug } = useParams();
	if (slug === undefined) {
		throw new Error('ошибка при попытке перехода на страницу статьи');
	}
	const {
		data: currArticle,
		isLoading: currArticleIsLoading,
		error: currArticleError,
	} = useFetchArticleByIdQuery({ slug });

	useEffect(() => {
		if (!currArticle) {
			return;
		}

		formMethods.setValue('body', currArticle.article.body);
		formMethods.setValue('description', currArticle.article.description);
		formMethods.setValue('title', currArticle.article.title);
		formMethods.setValue(
			'tagList',
			currArticle.article.tagList.map(tag => ({ value: tag }))
		);
	}, [currArticle]);

	const submitHandler = useCallback<SubmitHandler<ArticleFormValues>>(formData => {
		sendUpdateArticle({
			article: {
				body: formData.body.trim(),
				description: formData.description.trim(),
				title: formData.title.trim(),
				tagList: formData.tagList.map(tag => tag.value.trim()),
			},
			slug,
		});
	}, []);
	return (
		<div className="edit-article-page">
			<Container>
				{currArticleError && <div className="edit-article-page__page-error">failed to load article</div>}
				<ArticleFormCard
					formMethods={formMethods}
					onSubmit={submitHandler}
					isLoading={isSendinig || currArticleIsLoading}
					header={
						<>
							{sendArticleError && <ArticleFormCard.ErrorField error={sendArticleError} />}
							{sendArticleData && <ArticleFormCard.SuccessField>Saved</ArticleFormCard.SuccessField>}
							<ArticleFormCard.FormTitle>Edit Article</ArticleFormCard.FormTitle>
						</>
					}
					body={
						<Flex alignItems="fs" justifyContent="fs" direction="c">
							<ArticleFormCard.Title />
							<ArticleFormCard.ShortDescription />
							<ArticleFormCard.Text />
							<ArticleFormCard.Taglist />
						</Flex>
					}
					footer={<ArticleFormCard.SubmitBtn disabled={isSendinig} />}
				/>
			</Container>
		</div>
	);
};

export default EditArticlePage;
