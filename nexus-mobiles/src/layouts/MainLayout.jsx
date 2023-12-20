import CustomNavbar from '../components/CustomNavbar/CustomNavbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<>
			<CustomNavbar />
			<Outlet />
		</>
	);
};

export default MainLayout;
