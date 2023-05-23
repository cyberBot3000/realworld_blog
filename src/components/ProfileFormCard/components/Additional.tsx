import React, { type PropsWithChildren } from 'react';

export const Additional = ({ children }: PropsWithChildren) => {
	return <div className="profile-form-card__additional-info">{children}</div>;
};
