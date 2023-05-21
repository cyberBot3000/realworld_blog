import React, { type FC } from 'react';
import './style.scss';

export interface LoaderProps {
	className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
	return (
		<div className={`ring-loader ${className ?? ''}`}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
