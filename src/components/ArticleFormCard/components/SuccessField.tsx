import React, { PropsWithChildren } from 'react';

const SuccessField = ({ children }: PropsWithChildren) => {
	return (
		<div className="article-form-card__message-field article-form-card__message-field_success">
			<div className="article-form-card__text">{children}</div>
		</div>
	);
};

export default SuccessField;
