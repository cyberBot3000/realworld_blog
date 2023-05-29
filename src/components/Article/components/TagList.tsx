import { Flex } from 'components/ui/Flex';
import React from 'react';
import { useArticleContext } from '../hooks';
import _ from 'lodash';
import { PropsWithWordCut } from '../types';
import { getCuttedString } from '../utils';

export const TagList = ({ maxViewLength, breakElement = '...' }: PropsWithWordCut) => {
	const { tagList } = useArticleContext();
	return (
		<Flex className="article__tag-list" wrap>
			{tagList.map(tag => (
				<div className="article__tag" key={_.uniqueId('tag_')}>
					{getCuttedString(tag || '', maxViewLength, breakElement)}
				</div>
			))}
		</Flex>
	);
};
