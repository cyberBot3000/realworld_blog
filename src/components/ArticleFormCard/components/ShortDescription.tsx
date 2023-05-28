import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ArticleFormValues } from '../types';
import { notOnlySpaces, requiredMessage } from '../model';

export const ShortDescription = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<ArticleFormValues>();
	return (
		<div className="article-form-card__input-section">
			<div className="article-form-card__section-label">Short description</div>
			<input
				type="text"
				className={`article-form-card__text-input ${
					errors?.description ? 'article-form-card__text-input_error' : ''
				}`}
				placeholder="Short description"
				{...register('description', {
					validate: {
						notOnlySpaces,
					},
					required: requiredMessage,
				})}
			/>
			{errors?.description?.message && (
				<div className="article-form-card__input-error-message">{errors?.description?.message}</div>
			)}
		</div>
	);
};

export default ShortDescription;
