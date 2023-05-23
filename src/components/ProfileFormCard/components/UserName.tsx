import React from 'react';

export const UserName = () => {
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">Username</label>
			<input type="text" placeholder="Username" className="profile-form-card__text-input" />
		</div>
	);
};

export default UserName;
