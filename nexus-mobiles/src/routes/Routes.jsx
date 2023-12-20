import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
]);

export default router;
