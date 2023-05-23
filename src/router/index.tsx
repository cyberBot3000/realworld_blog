import EditProfilePage from 'pages/EditProfile';
import { HomePage } from 'pages/Home';
import { SignInPage } from 'pages/SingIn';
import { SignUpPage } from 'pages/SignUp';
import { SingleArticle } from 'pages/SingleArticle';
import { AppLayout } from 'pages/layout';
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
				element: <SignInPage />,
			},
			{
				path: '/sign-up',
				element: <SignUpPage />,
			},
			{
				path: '/profile',
				element: <EditProfilePage />,
			},
			{
				path: '/articles/:slug',
				element: <SingleArticle />,
			},
		],
	},
]);
