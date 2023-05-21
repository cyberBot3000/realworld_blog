import { type FC } from 'react';
import { type FlexProps } from './types';
import { getClassName } from './utils';

import './style.scss';

export * from './types';

export const Flex: FC<FlexProps> = ({
	className,
	alignItems,
	justifyContent,
	wrap,
	direction,
	children,
}) => {
	const flexClassName = getClassName(
		alignItems,
		justifyContent,
		wrap,
		direction
	);
	return (
		<div className={`flex ${flexClassName} ${className ?? ''}`}>
			{children}
		</div>
	);
};
