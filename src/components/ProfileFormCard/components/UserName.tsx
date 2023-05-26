import React from 'react';
import { userNameValidation, usernameMaxLengthValidator, usernameMinLengthValidator } from '../utils';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '../types';

export const UserName = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormValues>();
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">Username</label>
			<input
				type="text"
				placeholder="Username"
				className={`profile-form-card__text-input ${
					errors.username ? 'profile-form-card__text-input_error' : ''
				}`}
				{...register('username', {
					required: 'this field is required',
					minLength: usernameMinLengthValidator,
					maxLength: usernameMaxLengthValidator,
					validate: userNameValidation,
				})}
			/>
			{errors.username && <div className="profile-form-card__error-message">{errors.username.message}</div>}
		</div>
	);
};

export default UserName;
