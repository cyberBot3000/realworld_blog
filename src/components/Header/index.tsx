import { Flex } from 'components/ui/Flex';
import { Link } from 'react-router-dom';
import { useFetchCurrentUserQuery } from 'service';
import { useAppSelector } from 'utils/hooks';
import { SignedIn, SignedOut } from './components';
import './style.scss';

export const Header = () => {
	const { data, isLoading } = useFetchCurrentUserQuery(undefined, {
		refetchOnFocus: true,
		refetchOnMountOrArgChange: true,
		refetchOnReconnect: true,
	});
	const isSignedIn = useAppSelector(state => !!state.authToken.value);
	return (
		<div className="header">
			<Flex alignItems="c" justifyContent="sb">
				<h6 className="header__logo">
					<Link to={'/'}>Realworld Blog</Link>
				</h6>
				{!isSignedIn && <SignedOut />}
				{!isLoading && isSignedIn && data && <SignedIn userData={data} />}
			</Flex>
		</div>
	);
};

export default Header;
