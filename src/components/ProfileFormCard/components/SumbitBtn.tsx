import React, { type PropsWithChildren } from 'react';

export const SubmitBtn = ({ children }: PropsWithChildren) => {
	return (
		<button type="submit" className="profile-form-card__submit-btn">
			{children}
		</button>
	);
};
