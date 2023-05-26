import { Flex } from 'components/ui/Flex';
import { Loader } from 'components/ui/Loader';

export const PageLoader = () => {
	return (
		<Flex alignItems="c" justifyContent="c" direction="c" className="edit-profile-page__loader-wrapper">
			<Loader />
		</Flex>
	);
};
