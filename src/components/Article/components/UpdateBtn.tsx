import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useArticleContext } from '../hooks';

export const UpdateBtn = () => {
	const navigate = useNavigate();
	const { slug } = useArticleContext();
	return (
		<button
			className="article__action-btn article__action-btn_success"
			onClick={() => {
				navigate(`/articles/${slug}/edit`);
			}}
		>
			Update
		</button>
	);
};

export default UpdateBtn;
