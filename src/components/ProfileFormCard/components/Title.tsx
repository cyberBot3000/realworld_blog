import React, { type PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren) => {
	return <div className="profile-form-card__title">{children}</div>;
};

export default Title;
