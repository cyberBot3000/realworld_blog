import './style.scss';
import { ArticleFormCardProps } from './types';
import { FormTitle, ShortDescription, Text, Title, Taglist, SubmitBtn, ErrorField } from './components';
import { FormProvider } from 'react-hook-form';

const ArticleFormCard = ({
	header,
	footer,
	body,
	className = '',
	isLoading = false,
	formMethods,
	onSubmit,
}: ArticleFormCardProps) => {
	return (
		<FormProvider {...formMethods}>
			<form
				className={`article-form-card ${isLoading ? 'article-form-card_loading' : ''} ${className}`}
				onSubmit={formMethods.handleSubmit(onSubmit)}
			>
				<header className="article-form-card__header">{header}</header>
				<main className="article-form-card__body">{body}</main>
				<footer className="article-form-card__footer">{footer}</footer>
			</form>
		</FormProvider>
	);
};

ArticleFormCard.FormTitle = FormTitle;
ArticleFormCard.ShortDescription = ShortDescription;
ArticleFormCard.Text = Text;
ArticleFormCard.Title = Title;
ArticleFormCard.Taglist = Taglist;
ArticleFormCard.SubmitBtn = SubmitBtn;
ArticleFormCard.ErrorField = ErrorField;
export default ArticleFormCard;
