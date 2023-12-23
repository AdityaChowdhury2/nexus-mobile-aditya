import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../config/firebase.config.js';
// import useAxios from '../hooks/useAxios';

import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	// const axiosPublic = useAxios();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			const loggedUser = currentUser?.email;
			console.log('loggedUser', loggedUser);

			if (loggedUser) {
				// axiosPublic
				// .post('/api/v1/create-token', { email: loggedUser })
				// .then(() => {
				setUser(currentUser);
				setLoading(false);
				// console.log(res.data);
				// });
			} else {
				// axiosPublic
				// .post('/api/v1/delete-token')
				// .then(() => {
				// console.log(res.data);
				setLoading(false);
				setUser(currentUser);
				// })
				// .catch(err => {
				// 	console.log(err);
				// });
			}
		});
		return () => unSubscribe();
	}, []);

	const googleProvider = new GoogleAuthProvider();

	const createUser = ({ email, password }) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const updateUser = (name, photo = '') => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	const login = ({ email, password }) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		setLoading(true);
		return signOut(auth);
	};

	const googleLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const authInfo = {
		googleLogin,
		user,
		loading,
		createUser,
		login,
		logout,
		updateUser,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
