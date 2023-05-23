import React from 'react';

export const Email = () => {
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">Email Adress</label>
			<input type="email" placeholder="Email Adress" className="profile-form-card__text-input" />
		</div>
	);
};

export default Email;
