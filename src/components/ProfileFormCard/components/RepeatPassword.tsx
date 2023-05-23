import React from 'react';

export const RepeatPassword = () => {
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">Repeat password</label>
			<input type="password" placeholder="Password" className="profile-form-card__text-input" />
		</div>
	);
};

export default RepeatPassword;
