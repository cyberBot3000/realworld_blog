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

interface ProfileFormCardProps {
	header?: ReactNode;
	main?: ReactNode;
	footer?: ReactNode;
	className?: string;
}

export const ProfileFormCard = ({ header, main, footer, className }: ProfileFormCardProps) => {
	return (
		<form className={`profile-form-card ${className}`}>
			<header className="profile-form-card__header">{header}</header>
			<main className="profile-form-card__main">{main}</main>
			<footer className="profile-form-card__footer">{footer}</footer>
		</form>
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
