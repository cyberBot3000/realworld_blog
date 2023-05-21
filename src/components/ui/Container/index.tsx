import React, { type FC } from 'react';
import './index.scss';

export interface ContainerProps extends React.PropsWithChildren {
	className?: string;
}

export const Container: FC<ContainerProps> = ({ className, children }) => (
	<div className="container-wrapper">
		<div className={`container ${className ?? ''}`}>{children}</div>
	</div>
);
