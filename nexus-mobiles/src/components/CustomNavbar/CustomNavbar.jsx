import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { MdMenu } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';

const CustomNavbar = () => {
	const { logout } = useAuth();
	const { user } = useAuth();
	const navList = (
		<>
			<li>
				<a>Item 1</a>
			</li>
			<li>
				<a>Item 3</a>
			</li>
		</>
	);
	return (
		<div className="navbar bg-base-100 container">
			<div className="navbar-start">
				<Link to={'/'}>
					<Logo />
				</Link>
			</div>
			{/* <div className="navbar-center hidden lg:flex"> */}
			{/* </div> */}
			<div className="navbar-end">
				<div className="hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navList}</ul>
				</div>
				<div className="dropdown dropdown-end mr-2">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<MdMenu size={22} />
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navList}
					</ul>
				</div>
				{!user ? (
					<Link to={'/login'}>
						<button className="btn btn-sm bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)] text-[var(--white)]">
							Login
						</button>
					</Link>
				) : (
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt={user?.displayName}
									src={
										user?.photoURL ||
										'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
									}
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<button onClick={logout} className="text-red-500 font-bold">
									Logout
								</button>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default CustomNavbar;
