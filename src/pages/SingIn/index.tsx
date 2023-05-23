import { ProfileFormCard } from 'components/ProfileFormCard';
import { Container } from 'components/ui/Container';
import { Flex } from 'components/ui/Flex';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const SignInPage = () => {
	return (
		<div className="sing-in-page">
			<Container>
				<ProfileFormCard
					className="sign-in-page__form"
					onSubmit={data => {
						console.log(data);
					}}
					header={<ProfileFormCard.Title>Sign in</ProfileFormCard.Title>}
					main={
						<Flex className="sign-in-page__main" direction="c">
							<ProfileFormCard.Email />
							<ProfileFormCard.Password />
						</Flex>
					}
					footer={
						<>
							<ProfileFormCard.SubmitBtn>Login</ProfileFormCard.SubmitBtn>
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
