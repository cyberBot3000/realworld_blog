import React, { PropsWithChildren } from 'react';

export const FormTitle = ({ children }: PropsWithChildren) => {
	return <h6 className="article-form-card__form-title">{children}</h6>;
};

export default FormTitle;
