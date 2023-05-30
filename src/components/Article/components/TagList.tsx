import { Flex } from 'components/ui/Flex';
import React, { useState } from 'react';
import { useArticleContext } from '../hooks';
import _ from 'lodash';
import { PropsWithWordCut } from '../types';
import { getCuttedString } from '../utils';

export interface TagListProps extends PropsWithWordCut {
	tagListMaxLength?: number;
}

export const TagList = ({
	maxViewLength: maxTagTextViewLength,
	tagListMaxLength = 15,
	breakElement = '...',
}: TagListProps) => {
	const [isViewAll, setIsViewAll] = useState(false);
	const { tagList } = useArticleContext();
	return (
		<Flex className="article__tag-list" wrap>
			{tagList.slice(0, isViewAll ? tagList.length : tagListMaxLength).map(tag => (
				<div className="article__tag" key={_.uniqueId('tag_')}>
					{getCuttedString(tag || '', maxTagTextViewLength, breakElement)}
				</div>
			))}
			{tagList.length > tagListMaxLength && (
				<button
					className="article__tag-change-view-length-btn"
					onClick={() => {
						setIsViewAll(prevVal => !prevVal);
					}}
				>
					view {isViewAll ? 'less' : 'more'}
				</button>
			)}
		</Flex>
	);
};
