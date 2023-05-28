import { ReactNode } from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { ArticleWithBody, ArticleWithDescription, ArticleWithTitle } from 'service/types';

export interface ArticleFormCardProps {
	header?: ReactNode;
	body?: ReactNode;
	footer?: ReactNode;
	isLoading?: boolean;
	className?: string;
	formMethods: UseFormReturn<ArticleFormValues>;
	onSubmit: SubmitHandler<ArticleFormValues>;
}

export interface ArticleFormValues extends ArticleWithBody, ArticleWithDescription, ArticleWithTitle {
	tagList: {
		value: string;
	}[];
}
