import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ArticleFormValues } from '../types';
import { notOnlySpaces, requiredMessage } from '../model';

export const Text = () => {
	const { register } = useFormContext<ArticleFormValues>();
	return (
		<div className="article-form-card__input-section">
			<div className="article-form-card__section-label">Text</div>
			<textarea
				className="article-form-card__text-input article-form-card__text-input_area"
				placeholder="Text"
				{...register('body', {
					validate: {
						notOnlySpaces,
					},
					required: requiredMessage,
				})}
			></textarea>
		</div>
	);
};

export default Text;
