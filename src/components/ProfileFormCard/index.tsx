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
} from './components';
import { useForm, FormProvider, type SubmitHandler } from 'react-hook-form';
import { FormValues } from './types';

interface ProfileFormCardProps {
	header?: ReactNode;
	main?: ReactNode;
	footer?: ReactNode;
	className?: string;
	onSubmit?: SubmitHandler<FormValues>;
}

export const ProfileFormCard = ({ header, main, footer, className, onSubmit = () => {} }: ProfileFormCardProps) => {
	const methods = useForm<FormValues>({ mode: 'onChange' });

	return (
		<FormProvider {...methods}>
			<form className={`profile-form-card ${className}`} onSubmit={methods.handleSubmit(onSubmit)}>
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
