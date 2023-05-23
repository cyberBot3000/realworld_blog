import React from 'react';

export const AvatarImage = () => {
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">Avatar image (url)</label>
			<input type="text" placeholder="Avatar image" className="profile-form-card__text-input" />
		</div>
	);
};
