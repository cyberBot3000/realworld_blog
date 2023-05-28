import ArticleFormCard from 'components/ArticleFormCard';
import { ArticleFormValues } from 'components/ArticleFormCard/types';
import { Container } from 'components/ui/Container';
import { Flex } from 'components/ui/Flex';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSendNewArticleMutation } from 'service';
import { useAppSelector } from 'utils/hooks';

export const NewArticlePage = () => {
	const navigate = useNavigate();
	const isAutorised = useAppSelector(state => !!state.authToken.value);
	const formMethods = useForm<ArticleFormValues>({
		defaultValues: {
			tagList: [
				{
					value: '',
				},
			],
		},
		mode: 'all',
	});
	const [sendNewArticle, { error: sendArticleError, data: sendArticleResponse, isLoading }] =
		useSendNewArticleMutation();
	useEffect(() => {
		if (isLoading) return;
		if (sendArticleResponse !== undefined) {
			console.log(sendArticleResponse);
		}
	}, [isLoading, sendArticleResponse]);

	useEffect(() => {
		if (!isAutorised) {
			navigate('/');
		}
	}, []);
	const submitHandler = useCallback<SubmitHandler<ArticleFormValues>>(formData => {
		sendNewArticle({
			article: {
				body: formData.body.trim(),
				description: formData.description.trim(),
				tagList: formData.tagList.map(tag => tag.value.trim()),
				title: formData.title.trim(),
			},
		});
	}, []);
	return (
		<div className="new-article-page">
			<Container>
				<ArticleFormCard
					formMethods={formMethods}
					onSubmit={submitHandler}
					isLoading={isLoading}
					header={
						<>
							{sendArticleError && <ArticleFormCard.ErrorField error={sendArticleError} />}
							<ArticleFormCard.FormTitle>Create New Article</ArticleFormCard.FormTitle>
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
					footer={<ArticleFormCard.SubmitBtn disabled={isLoading} />}
				/>
			</Container>
		</div>
	);
};

export default NewArticlePage;
