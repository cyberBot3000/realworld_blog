import React from 'react';

export const NewPassword = () => {
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">New password</label>
			<input type="password" placeholder="New password" className="profile-form-card__text-input" />
		</div>
	);
};
