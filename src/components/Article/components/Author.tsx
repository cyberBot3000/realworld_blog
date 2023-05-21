import React from 'react';
import { useArticleContext } from '../hooks';
import { Flex } from 'components/ui/Flex';

export const Author = () => {
	const { author, createdAt } = useArticleContext();
	return (
		<Flex alignItems="c" justifyContent="fe" className="article__author">
			<div className="article__author-info">
				<h6 className="article__author-name">{author.username}</h6>
				<div className="article__created-at">
					{new Date(createdAt).toLocaleDateString('en', { dateStyle: 'medium' })}
				</div>
			</div>
			<div className="article__author-image">
				<img src={author.image} alt="" />
			</div>
		</Flex>
	);
};
