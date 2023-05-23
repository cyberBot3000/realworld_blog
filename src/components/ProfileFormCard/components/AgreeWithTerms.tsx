import _ from 'lodash';
import React, { useMemo } from 'react';
import { FormValues } from '../types';
import { useFormContext } from 'react-hook-form';

export const AgreeWithTerms = () => {
	const inputId = useMemo(() => _.uniqueId('profile-form-card-input-'), []);
	const { register } = useFormContext<FormValues>();
	return (
		<div className="profile-form-card__labeled-checkbox profile-form-card__labeled-checkbox_agree-with-terms">
			<input
				type="checkbox"
				id={inputId}
				className="profile-form-card__checkbox"
				{...register('agreeWithTerms', { required: true })}
			/>
			<label className="profile-form-card__checkbox-label" htmlFor={inputId}>
				I agree to the processing of my personal information
			</label>
		</div>
	);
};

export default AgreeWithTerms;
