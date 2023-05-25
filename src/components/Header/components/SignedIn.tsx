import CircleImage from 'components/ui/CircleImage';
import { Flex } from 'components/ui/Flex';
import { UserResponse } from 'service/types';
import { clearToken } from 'store';
import { AUTHORIZATION } from 'utils/const';
import { deleteCookie } from 'utils/helpers';
import { useAppDispatch } from 'utils/hooks';
import userImagePlaceholderPath from 'assets/images/user_image_placeholder.png';
import { Link, useNavigate } from 'react-router-dom';

export interface SignedInProps {
	userData: UserResponse;
}

export const SignedIn = ({ userData }: SignedInProps) => {
	const {
		user: { username, image },
	} = userData;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<Flex alignItems="c" justifyContent="fe" className="header__actions">
			<Link to="/">
				<div className="header__btn header__btn_sm header__btn_outlined header__btn_success">
					Create Article
				</div>
			</Link>
			<Link to="/profile">
				<Flex alignItems="c" justifyContent="fe" className="header__user">
					<h6 className="header__user-username">{username}</h6>
					<CircleImage src={image || userImagePlaceholderPath} />
				</Flex>
			</Link>
			<button
				className="header__btn header__btn_outlined header__btn_b"
				onClick={() => {
					dispatch(clearToken());
					deleteCookie(AUTHORIZATION);
					navigate('/sign-in');
				}}
			>
				<h6>Log out</h6>
			</button>
		</Flex>
	);
};
