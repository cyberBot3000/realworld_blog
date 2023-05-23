import { ProfileFormCard } from 'components/ProfileFormCard';
import { Container } from 'components/ui/Container';
import { Flex } from 'components/ui/Flex';
import './style.scss';

const EditProfilePage = () => {
	return (
		<div className="edit-profile-page">
			<Container>
				<ProfileFormCard
					className="edit-profile-page__form"
					header={<ProfileFormCard.Title>Sign in</ProfileFormCard.Title>}
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
							<ProfileFormCard.SubmitBtn>Save</ProfileFormCard.SubmitBtn>
						</>
					}
				/>
			</Container>
		</div>
	);
};

export default EditProfilePage;
