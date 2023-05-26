import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '../types';
import { passwordMaxLengthValidator, passwordMinLengthValidator } from '../utils';

export const NewPassword = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormValues>();
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">New password</label>
			<input
				type="password"
				autoComplete="new-password"
				placeholder="New password"
				className={`profile-form-card__text-input ${
					errors.newPassword ? 'profile-form-card__text-input_error' : ''
				}`}
				{...register('newPassword', {
					minLength: passwordMinLengthValidator,
					maxLength: passwordMaxLengthValidator,
				})}
			/>
			{errors.newPassword && <div className="profile-form-card__error-message">{errors.newPassword.message}</div>}
		</div>
	);
};
