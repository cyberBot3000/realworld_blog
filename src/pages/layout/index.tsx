import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
	return (
		<div className="app-layout">
			<div className="app-layout__header">
				<Header />
			</div>
			<Outlet />
		</div>
	);
};

export default AppLayout;
