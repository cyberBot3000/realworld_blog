import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSendDeleteArticleMutation } from 'service';
import { useOutsideClick } from 'utils/hooks';
import { useArticleContext } from '../hooks';

export const DeleteBtn = () => {
	const { slug } = useArticleContext();
	const [sendDeleteArticle, { isSuccess }] = useSendDeleteArticleMutation();
	const navigate = useNavigate();
	const [popupActive, setIsPopupActive] = useState(false);
	const popupRef = useRef<HTMLDivElement | null>(null);

	const hidePopup = () => {
		setIsPopupActive(false);
	};

	const deleteBtnClickHandler: MouseEventHandler<HTMLButtonElement> = e => {
		e.stopPropagation();
		if (popupActive) return;
		setIsPopupActive(true);
	};

	const delteArticle = () => {
		sendDeleteArticle({ slug });
		setIsPopupActive(false);
	};

	useOutsideClick<HTMLDivElement>(popupRef, hidePopup);

	useEffect(() => {
		if (isSuccess) navigate('/');
	}, [isSuccess]);
	return (
		<div className="article__popup-btn-block">
			<button className="article__action-btn article__action-btn_warning" onClick={deleteBtnClickHandler}>
				Delete
			</button>
			{popupActive && (
				<div className="article__btn-popup" ref={popupRef}>
					<div className="article__text">are you sure to delete this article?</div>
					<div className="article__btn-popup-actions">
						<button
							className="article__action-btn article__action-btn_sm article__action-btn_default"
							onClick={hidePopup}
						>
							No
						</button>
						<button
							className="article__action-btn article__action-btn_sm article__action-btn_accent"
							onClick={delteArticle}
						>
							Yes
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default DeleteBtn;
