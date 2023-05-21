import React from 'react';
import { useArticleContext } from '../hooks';

export const Description = () => {
	const { description } = useArticleContext();
	return <div className="article__description">{description}</div>;
};
