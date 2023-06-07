import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./index.module.scss";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../firestore";
import { Button } from "grommet";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
	const navigate = useNavigate();
	const [userDate, setuserDate] = useState(false);

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch(error => {});
	};

	useLayoutEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setuserDate(true);

				toast.success("Udało się zalogować!", {
					position: "top-left",
					autoClose: 500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			} else {
				setuserDate(false);
			}
		});
	}, []);
	return (
		<>
			<div className={styles.wrapper} role="presentation">
				Home
				{userDate ? (
					<Button
						primary
						label="Wyloguj"
						type="submit"
						onClick={handleLogout}
					/>
				) : (
					<Button
						primary
						label="Zaloguj"
						type="submit"
						onClick={() => navigate("/authentication")}
					/>
				)}
			</div>
			<ToastContainer />
		</>
	);
};
export default Home;
