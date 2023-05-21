import { type PropsWithChildren } from 'react';

export type ItemsAlignments = 'fs' | 'c' | 'fe' | 's' | 'n';

export type ContentJustifying = 'fs' | 'c' | 'fe' | 'sb' | 'sa' | 'n';

export type Directions = 'r' | 'c';

export interface FlexProps extends PropsWithChildren {
	className?: string;
	alignItems?: ItemsAlignments;
	justifyContent?: ContentJustifying;
	wrap?: boolean;
	direction?: Directions;
}
