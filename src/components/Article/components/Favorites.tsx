import { Flex } from 'components/ui/Flex';
import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useArticleContext } from '../hooks';
import { useAppSelector } from 'utils/hooks';
import { useSendFavoriteArticleMutation, useSendUnfavoriteArticleMutation } from 'service';

export const Favorites = () => {
	const { favoritesCount, favorited, slug } = useArticleContext();
	const [isDisabled, setIsDisabled] = useState(true);
	const isAutorised = useAppSelector(state => !!state.authToken.value);
	const [faforiteArticle, { isLoading: isFavLoading }] = useSendFavoriteArticleMutation();
	const [unFavoriteArticle, { isLoading: isUnfavLoading }] = useSendUnfavoriteArticleMutation();
	useEffect(() => {
		setIsDisabled(!isAutorised || isFavLoading || isUnfavLoading);
	}, [isAutorised, isFavLoading, isUnfavLoading]);

	const clickHandler = () => {
		if (!favorited) {
			faforiteArticle(slug);
		}
		if (favorited) {
			unFavoriteArticle(slug);
			return;
		}
	};
	return (
		<button
			className={`article__likes ${favorited && 'article__likes_liked'} ${
				isDisabled && 'article__likes_disabled'
			}`}
			onClick={clickHandler}
		>
			<Flex className="article__likes-layout" alignItems="fe" justifyContent="fs">
				{favorited ? (
					<AiFillHeart className="article__likes-icon" />
				) : (
					<AiOutlineHeart className="article__likes-icon" />
				)}
				<div className="article__likes-count">{favoritesCount}</div>
			</Flex>
		</button>
	);
};
