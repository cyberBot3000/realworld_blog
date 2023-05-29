import { ReactNode } from 'react';
import { IArticle } from 'types';

export interface ArticleProps {
	article: IArticle;
	header?: ReactNode;
	afterHeader?: ReactNode;
	body?: ReactNode;
	footer?: ReactNode;
}

export interface PropsWithWordCut {
	maxViewLength?: number;
	breakElement?: ReactNode;
}
