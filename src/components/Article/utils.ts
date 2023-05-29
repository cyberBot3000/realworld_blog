import { ReactNode } from 'react';

export const getCuttedString = (source: string, maxViewLength?: number, breakSymbol: ReactNode = '...'): string => {
	if (maxViewLength === undefined || source.length < maxViewLength) {
		return source;
	}
	return source.slice(0, maxViewLength) + ' ' + breakSymbol;
};
