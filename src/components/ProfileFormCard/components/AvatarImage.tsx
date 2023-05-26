import { useFormContext } from 'react-hook-form';
import { FormValues } from '../types';
import { urlValidation } from '../utils';

export const AvatarImage = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormValues>();
	return (
		<div className="profile-form-card__labeled-text-field">
			<label className="profile-form-card__text-input-label">Avatar image (url)</label>
			<input
				type="text"
				placeholder="Avatar image"
				className={`profile-form-card__text-input ${errors.image ? 'profile-form-card__text-input_error' : ''}`}
				{...register('image', {
					validate: urlValidation,
				})}
			/>
			{errors.image && <div className="profile-form-card__error-message">{errors.image.message}</div>}
		</div>
	);
};
