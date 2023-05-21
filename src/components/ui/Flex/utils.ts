import {
	type Directions,
	type ContentJustifying,
	type ItemsAlignments,
} from './types';

export const getClassName = (
	alignItems: ItemsAlignments | undefined,
	justifyContent: ContentJustifying | undefined,
	wrap: boolean | undefined,
	direction: Directions | undefined
): string => {
	const alignClass =
		alignItems !== undefined ? `flex_align-${alignItems} ` : '';
	const justifyClass =
		justifyContent !== undefined ? `flex_justify-${justifyContent} ` : '';
	const wrapClass = wrap ? 'flex_wrap ' : '';
	const directionClass =
		direction !== undefined ? `flex_direction-${direction} ` : '';
	return alignClass + justifyClass + wrapClass + directionClass;
};
