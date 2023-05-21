import EditProfilePage from 'pages/EditProfile';
import { HomePage } from 'pages/Home';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';
import AppLayout from 'pages/layout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
				index: true,
			},
			{
				path: '/sign-in',
				element: <LoginPage />,
			},
			{
				path: '/sign-up',
				element: <RegisterPage />,
			},
			{
				path: '/profile',
				element: <EditProfilePage />,
			},
		],
	},
]);
