import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '../types';

export const Email = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormValues>();
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">Email Adress</label>
			<input
				type="email"
				autoComplete="email"
				placeholder="Email Adress"
				className={`profile-form-card__text-input ${errors.email ? 'profile-form-card__text-input_error' : ''}`}
				{...register('email', { required: 'this field is required' })}
			/>
			{errors.email && <div className="profile-form-card__error-message">{errors.email.message}</div>}
		</div>
	);
};

export default Email;
