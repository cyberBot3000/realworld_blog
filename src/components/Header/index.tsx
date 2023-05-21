import { Flex } from 'components/ui/Flex';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Header = () => {
	return (
		<div className="header">
			<Flex alignItems="c" justifyContent="sb">
				<h6 className="header__logo">
					<Link to={'/'}>Realworld Blog</Link>
				</h6>
				<Flex alignItems="c" justifyContent="fe" className="header__actions">
					<h6 className="header__btn">
						<Link to={'/sign-in'}>Sign in</Link>
					</h6>
					<h6 className="header__btn header__btn_success">
						<Link to={'/sign-up'}>Sign up</Link>
					</h6>
				</Flex>
			</Flex>
		</div>
	);
};

export default Header;
