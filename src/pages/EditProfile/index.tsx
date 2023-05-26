import { ProfileFormCard } from 'components/ProfileFormCard';
import { FormValues } from 'components/ProfileFormCard/types';
import { Container } from 'components/ui/Container';
import { Flex } from 'components/ui/Flex';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useFetchCurrentUserQuery, useSendUpdateUserMutation } from 'service';
import { UpdateUserArgs } from 'service/types';
import { PageError } from './components/PageError';
import { PageLoader } from './components/PageLoader';
import './style.scss';

const EditProfilePage = () => {
	const {
		data: currentUserData,
		error: currentUserError,
		isLoading: currentUserIsLoading,
	} = useFetchCurrentUserQuery(undefined);
	const methods = useForm<FormValues>({
		mode: 'onChange',
		defaultValues: {
			email: currentUserData?.user.email,
			username: currentUserData?.user.username,
			image: currentUserData?.user.image,
		},
	});
	const [sendUpdateUser, { isLoading: updateUserIsLoading, error: updateUserError, data: updateUserData }] =
		useSendUpdateUserMutation();
	const navigate = useNavigate();
	useEffect(() => {
		if (currentUserIsLoading) {
			return;
		}
		if (currentUserData === undefined) {
			navigate('/sign-in');
		}
	}, [currentUserIsLoading, currentUserData]);
	const submitHandler: SubmitHandler<FormValues> = formData => {
		sendUpdateUser({ ...(formData as UpdateUserArgs), password: formData.newPassword });
		methods.setValue('newPassword', '');
	};

	return (
		<div className="edit-profile-page">
			<Container>
				{currentUserIsLoading && <PageLoader />}
				{currentUserError && <PageError />}
				{currentUserData && (
					<ProfileFormCard
						className={`edit-profile-page__form ${
							updateUserIsLoading && 'edit-profile-page__form_loading'
						}`}
						onSubmit={submitHandler}
						formMethods={methods}
						header={
							<>
								{updateUserData && <div className="edit-profile-page__success-field">saved</div>}
								{updateUserError && <ProfileFormCard.ErrorField error={updateUserError} />}
								<ProfileFormCard.Title>Edit profile</ProfileFormCard.Title>
							</>
						}
						main={
							<Flex className="edit-profile-page__form-main" direction="c">
								<ProfileFormCard.UserName />
								<ProfileFormCard.Email />
								<ProfileFormCard.NewPassword />
								<ProfileFormCard.AvatarImage />
							</Flex>
						}
						footer={
							<>
								<ProfileFormCard.SubmitBtn disabled={updateUserIsLoading}>
									Save
								</ProfileFormCard.SubmitBtn>
							</>
						}
					/>
				)}
			</Container>
		</div>
	);
};

export default EditProfilePage;
