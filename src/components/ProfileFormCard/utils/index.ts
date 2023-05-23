import { type Validate } from 'react-hook-form';
import { FormValues } from '../types';

export const passwordMinLengthValidator = {
	value: 6,
	message: "password's length can't be less then 6",
};
export const passwordMaxLengthValidator = {
	value: 40,
	message: "password's length can't be more then 40",
};
export const usernameMinLengthValidator = {
	value: 3,
	message: "username's length can't be less then 3",
};
export const usernameMaxLengthValidator = {
	value: 20,
	message: "username's length can't be more then 20",
};

export const urlValidation: Validate<string, FormValues> = value => {
	const exp = new RegExp(
		'^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$'
	);
	return exp.test(value) || value === '' || 'value must be a valid url adress';
};
