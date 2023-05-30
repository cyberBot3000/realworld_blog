import React, { useEffect } from 'react';
import { useArticleContext } from '../hooks';
import { useSendDeleteArticleMutation } from 'service';
import { useNavigate } from 'react-router-dom';

export const DeleteBtn = () => {
	const { slug } = useArticleContext();
	const [sendDeleteArticle, { isSuccess }] = useSendDeleteArticleMutation();
	const navigate = useNavigate();

	useEffect(() => {
		if (isSuccess) navigate('/');
	}, [isSuccess]);

	return (
		<button
			className="article__action-btn article__action-btn_warning"
			onClick={() => {
				sendDeleteArticle({
					slug,
				});
			}}
		>
			Delete
		</button>
	);
};

export default DeleteBtn;
