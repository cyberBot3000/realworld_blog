import { createContext, useContext } from 'react';
import { IArticle } from 'types';

export const articleContext = createContext<IArticle | null>(null);

export const useArticleContext = (): IArticle => {
	const articleObj = useContext(articleContext);
	if (articleObj === null) {
		throw new Error('trying to use article context outside the <Article /> compounded component');
	}
	return articleObj;
};
