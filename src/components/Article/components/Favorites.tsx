import { Flex } from 'components/ui/Flex';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useArticleContext } from '../hooks';

export const Favorites = () => {
	const { favoritesCount } = useArticleContext();
	return (
		<Flex className="article__likes" alignItems="c" justifyContent="fs">
			<AiOutlineHeart />
			{favoritesCount}
		</Flex>
	);
};
