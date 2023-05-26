import { ProfileFormCard } from 'components/ProfileFormCard';
import { Container } from 'components/ui/Container';
import { Flex } from 'components/ui/Flex';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.scss';
import { useSendSignUpMutation } from 'service';
import { SignUpUserArgs } from 'service/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from 'components/ProfileFormCard/types';

export const SignUpPage = () => {
	const [sendSignUp, { data, error, isLoading }] = useSendSignUpMutation();
	const navigate = useNavigate();
	const submitHandler: SubmitHandler<FormValues> = formData => {
		sendSignUp(formData as SignUpUserArgs);
	};
	useEffect(() => {
		if (data !== undefined) {
			navigate('/sign-in');
		}
	}, [data]);

	const methods = useForm<FormValues>({ mode: 'onChange' });

	return (
		<div className="register-page">
			<Container>
				<ProfileFormCard
					className={`register-page__form ${isLoading && 'register-page__form_loading'}`}
					onSubmit={submitHandler}
					formMethods={methods}
					header={
						<>
							{error && <ProfileFormCard.ErrorField error={error} />}
							<ProfileFormCard.Title>Create new account</ProfileFormCard.Title>
						</>
					}
					main={
						<Flex direction="c" className="register-page__form-main">
							<ProfileFormCard.UserName />
							<ProfileFormCard.Email />
							<ProfileFormCard.Password />
							<ProfileFormCard.RepeatPassword />
							<ProfileFormCard.AgreeWithTerms />
						</Flex>
					}
					footer={
						<>
							<ProfileFormCard.SubmitBtn disabled={isLoading}>Create</ProfileFormCard.SubmitBtn>
							<ProfileFormCard.Additional>
								Already have an account? <Link to="/sign-in">Sign In</Link>{' '}
							</ProfileFormCard.Additional>
						</>
					}
				/>
			</Container>
		</div>
	);
};
