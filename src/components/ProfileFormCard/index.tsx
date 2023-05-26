import './style.scss';

import React, { type ReactNode } from 'react';

import {
	AgreeWithTerms,
	Email,
	Password,
	RepeatPassword,
	Title,
	UserName,
	SubmitBtn,
	Additional,
	NewPassword,
	AvatarImage,
	ErrorField,
} from './components';
import { useForm, FormProvider, type SubmitHandler, UseFormReturn } from 'react-hook-form';
import { FormValues } from './types';

interface ProfileFormCardProps {
	header?: ReactNode;
	main?: ReactNode;
	footer?: ReactNode;
	className?: string;
	onSubmit?: SubmitHandler<FormValues>;
	defaultValues?: Partial<FormValues>;
	formMethods: UseFormReturn<FormValues, unknown>;
}

export const ProfileFormCard = ({
	header,
	main,
	footer,
	className,
	onSubmit = () => {},
	formMethods,
}: ProfileFormCardProps) => {
	return (
		<FormProvider {...formMethods}>
			<form className={`profile-form-card ${className}`} onSubmit={formMethods.handleSubmit(onSubmit)}>
				<header className="profile-form-card__header">{header}</header>
				<main className="profile-form-card__main">{main}</main>
				<footer className="profile-form-card__footer">{footer}</footer>
			</form>
		</FormProvider>
	);
};

ProfileFormCard.AgreeWithTerms = AgreeWithTerms;
ProfileFormCard.Email = Email;
ProfileFormCard.Password = Password;
ProfileFormCard.RepeatPassword = RepeatPassword;
ProfileFormCard.Title = Title;
ProfileFormCard.UserName = UserName;
ProfileFormCard.SubmitBtn = SubmitBtn;
ProfileFormCard.Additional = Additional;
ProfileFormCard.NewPassword = NewPassword;
ProfileFormCard.AvatarImage = AvatarImage;
ProfileFormCard.ErrorField = ErrorField;
