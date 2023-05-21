import { Flex } from 'components/ui/Flex';
import React from 'react';
import { useArticleContext } from '../hooks';
import _ from 'lodash';

export const TagList = () => {
	const { tagList } = useArticleContext();
	return (
		<Flex className="article__tag-list" wrap>
			{tagList.map(
				tag =>
					tag && (
						<div className="article__tag" key={_.uniqueId('tag_')}>
							{tag}
						</div>
					)
			)}
		</Flex>
	);
};
