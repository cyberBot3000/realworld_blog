import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ArticleFormValues } from '../types';
import { maxTitleLength, notOnlySpaces, requiredMessage } from '../model';

export const Title = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<ArticleFormValues>();
	return (
		<div className="article-form-card__input-section">
			<div className="article-form-card__section-label">Title</div>
			<input
				type="text"
				className={`article-form-card__text-input ${
					errors?.title ? 'article-form-card__text-input_error' : ''
				}`}
				placeholder="Title"
				{...register('title', {
					validate: {
						maxTitleLength,
						notOnlySpaces,
					},
					required: requiredMessage,
				})}
			/>
			{errors?.title?.message && (
				<div className="article-form-card__input-error-message">{errors?.title?.message}</div>
			)}
		</div>
	);
};

export default Title;
