import React from 'react';

export const Password = () => {
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">Password</label>
			<input
				type="email"
				placeholder="Password"
				className="profile-form-card__text-input profile-form-card__text-input_error"
			/>
			<div className="profile-form-card__error-message">Your password needs to be at least 6 characters.</div>
		</div>
	);
};

export default Password;
