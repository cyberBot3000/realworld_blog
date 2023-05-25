import { Flex } from 'components/ui/Flex';
import { Link } from 'react-router-dom';

export const SignedOut = () => {
	return (
		<Flex alignItems="c" justifyContent="fe" className="header__actions">
			<Link to={'/sign-in'}>
				<h6 className="header__btn header__btn_outlined header__btn_b">Sign in</h6>
			</Link>
			<Link to={'/sign-up'}>
				<h6 className="header__btn header__btn_success header__btn_b header__btn_outlined">Sign up</h6>
			</Link>
		</Flex>
	);
};
