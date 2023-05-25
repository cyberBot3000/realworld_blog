import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import { useFetchCurrentUserQuery } from 'service';
import { setToken } from 'store';
import { useAppDispatch } from 'utils/hooks';
import './style.scss';
const App = () => {
	const { data } = useFetchCurrentUserQuery(undefined);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (data !== undefined) dispatch(setToken(data.user.token));
	}, [data]);
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
