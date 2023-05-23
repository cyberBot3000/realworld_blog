import { type PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';

export const SubmitBtn = ({ children }: PropsWithChildren) => {
	const {
		formState: { isDirty, isValid },
	} = useFormContext();
	return (
		<button
			type="submit"
			disabled={!isValid || !isDirty}
			className={`profile-form-card__submit-btn ${
				!isValid || !isDirty ? 'profile-form-card__submit-btn_disabled' : ''
			}`}
		>
			{children}
		</button>
	);
};
