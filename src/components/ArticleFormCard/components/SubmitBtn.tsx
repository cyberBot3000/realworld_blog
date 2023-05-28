import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface SubmitBtnProps {
	disabled?: boolean;
}

export const SubmitBtn = ({ disabled = false }: SubmitBtnProps) => {
	const {
		formState: { isValid },
	} = useFormContext();
	return (
		<button
			type="submit"
			disabled={!isValid || disabled}
			className={`article-form-card__submit-btn ${
				!isValid || disabled ? 'article-form-card__submit-btn_disabled' : ''
			}`}
		>
			Send
		</button>
	);
};

export default SubmitBtn;
