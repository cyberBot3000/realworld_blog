import { ProfileFormCard } from 'components/ProfileFormCard';
import { Container } from 'components/ui/Container';
import { Flex } from 'components/ui/Flex';
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export const SignUpPage = () => {
	return (
		<div className="register-page">
			<Container>
				<ProfileFormCard
					className="register-page__form"
					onSubmit={data => {
						console.log(data);
					}}
					header={<ProfileFormCard.Title>Create new account</ProfileFormCard.Title>}
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
							<ProfileFormCard.SubmitBtn>Create</ProfileFormCard.SubmitBtn>
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
