import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '../types';
import { passwordMaxLengthValidator, passwordMinLengthValidator } from '../utils';

export const Password = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormValues>();
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">Password</label>
			<input
				type="password"
				autoComplete="current-password"
				placeholder="Password"
				className={`profile-form-card__text-input ${
					errors.password ? 'profile-form-card__text-input_error' : ''
				}`}
				{...register('password', {
					required: 'this field is required',
					minLength: passwordMinLengthValidator,
					maxLength: passwordMaxLengthValidator,
				})}
			/>
			{errors.password && <div className="profile-form-card__error-message">{errors.password.message}</div>}
		</div>
	);
};

export default Password;
