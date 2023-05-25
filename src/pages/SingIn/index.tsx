import { ProfileFormCard } from 'components/ProfileFormCard';
import { FormValues } from 'components/ProfileFormCard/types';
import { Container } from 'components/ui/Container';
import { Flex } from 'components/ui/Flex';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSendSignInMutation } from 'service';
import { SignInUserArgs } from 'service/types';
import './style.scss';
import { useAppDispatch } from 'utils/hooks';
import { setToken } from 'store';

export const SignInPage = () => {
	const [signIn, { data, error, isLoading }] = useSendSignInMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (data === undefined) {
			return;
		}
		dispatch(setToken(data.user.token));
		navigate('/');
	}, [data]);
	const onSubmit: SubmitHandler<FormValues> = formData => {
		signIn(formData as SignInUserArgs);
	};
	return (
		<div className="sing-in-page">
			<Container>
				<ProfileFormCard
					className={`sign-in-page__form ${isLoading && 'sign-in-page__form_loading'}`}
					onSubmit={onSubmit}
					header={
						<>
							{error && <ProfileFormCard.ErrorField error={error} />}
							<ProfileFormCard.Title>Sign in</ProfileFormCard.Title>
						</>
					}
					main={
						<Flex className="sign-in-page__main" direction="c">
							<ProfileFormCard.Email />
							<ProfileFormCard.Password />
						</Flex>
					}
					footer={
						<>
							<ProfileFormCard.SubmitBtn disabled={isLoading}>Login</ProfileFormCard.SubmitBtn>
							<ProfileFormCard.Additional>
								Don’t have an account? <Link to="/sign-up">Sign Up.</Link>
							</ProfileFormCard.Additional>
						</>
					}
				/>
			</Container>
		</div>
	);
};
