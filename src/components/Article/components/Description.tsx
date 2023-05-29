import React from 'react';
import { useArticleContext } from '../hooks';
import { PropsWithWordCut } from '../types';
import { getCuttedString } from '../utils';

export const Description = ({ maxViewLength, breakElement = '...' }: PropsWithWordCut) => {
	const { description } = useArticleContext();
	return (
		<div className="article__description">{getCuttedString(description || '', maxViewLength, breakElement)}</div>
	);
};
