import _ from 'lodash';
import React, { useMemo } from 'react';

export const AgreeWithTerms = () => {
	const inputId = useMemo(() => _.uniqueId('profile-form-card-input-'), []);
	return (
		<div className="profile-form-card__labeled-checkbox profile-form-card__labeled-checkbox_agree-with-terms">
			<input type="checkbox" id={inputId} className="profile-form-card__checkbox" />
			<label className="profile-form-card__checkbox-label" htmlFor={inputId}>
				I agree to the processing of my personal information
			</label>
		</div>
	);
};

export default AgreeWithTerms;
