import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '../types';
import { passwordMaxLengthValidator, passwordMinLengthValidator } from '../utils';

export const RepeatPassword = () => {
	const {
		register,
		formState: { errors },
		getValues,
	} = useFormContext<FormValues>();
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">Repeat password</label>
			<input
				type="password"
				autoComplete="off"
				placeholder="Repeat password"
				className={`profile-form-card__text-input ${
					errors.repeatPassword ? 'profile-form-card__text-input_error' : ''
				}`}
				{...register('repeatPassword', {
					required: 'this field is required',
					minLength: passwordMinLengthValidator,
					maxLength: passwordMaxLengthValidator,
					validate: value => value === getValues('password') || 'passwords should match',
				})}
			/>
			{errors.repeatPassword && (
				<div className="profile-form-card__error-message">{errors.repeatPassword.message}</div>
			)}
		</div>
	);
};

export default RepeatPassword;
