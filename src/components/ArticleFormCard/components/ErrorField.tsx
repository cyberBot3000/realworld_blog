import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useRef } from 'react';
import { FormStatusCodeErrorData } from 'types';
import { formatErrorData } from 'utils/helpers';

export interface ErrorFieldProps {
	error: FetchBaseQueryError | SerializedError;
}

export const ErrorField = ({ error }: ErrorFieldProps) => {
	const errMessage = useRef<string>();
	if ('status' in error) {
		if ('error' in error) {
			errMessage.current = error.error;
		} else {
			errMessage.current = formatErrorData(error.data as FormStatusCodeErrorData) || JSON.stringify(error.data);
		}
	} else {
		errMessage.current = error.message;
	}
	return (
		<div className="article-form-card__message-field article-form-card__message-field_error">
			<div className="article-form-card__text">{errMessage.current}</div>
		</div>
	);
};
