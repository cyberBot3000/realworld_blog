import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useArticleContext } from '../hooks';

export const Body = () => {
	const { body } = useArticleContext();
	return (
		<div className="article__body">
			<ReactMarkdown className="article__markdown">{body}</ReactMarkdown>
		</div>
	);
};

export default Body;
