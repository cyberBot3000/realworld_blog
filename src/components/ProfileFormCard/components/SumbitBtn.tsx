import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

export interface SubmitBtnProps {
	children: ReactNode;
	disabled?: boolean;
}

export const SubmitBtn = ({ children, disabled }: SubmitBtnProps) => {
	const {
		formState: { isDirty, isValid },
	} = useFormContext();
	return (
		<button
			type="submit"
			disabled={!isValid || !isDirty || disabled}
			className={`profile-form-card__submit-btn ${
				!isValid || !isDirty || disabled ? 'profile-form-card__submit-btn_disabled' : ''
			}`}
		>
			{children}
		</button>
	);
};
