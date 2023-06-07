import { TextInput, Button } from "grommet";
import React, { FormEvent, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firestore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authentication = () => {
	const [isItRegister, setisItRegister] = useState(true);
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [repeatpassword, setRepaetPassword] = useState("");
	const navigate = useNavigate();

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isItRegister) {
			if (password !== repeatpassword) return;
			await createUserWithEmailAndPassword(auth, login, password)
				.then(userCredential => {
					navigate("/");
				})
				.catch(error => {
					toast.error("Nie Udało się zarejestrować!", {
						position: "top-left",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
					});
				});
		} else {
			await signInWithEmailAndPassword(auth, login, password)
				.then(userCredential => {
					navigate("/");
				})
				.catch(error => {
					toast.error("Nie Udało się zalogować!", {
						position: "top-left",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
					});
				});
		}
	};

	return (
		<>
			<form action="/" onSubmit={e => onSubmit(e)}>
				<TextInput
					type="text"
					name="login"
					placeholder="Login"
					onChange={e => setLogin(e.target.value)}
				/>
				<TextInput
					type="password"
					name="password"
					placeholder="Password"
					onChange={e => setPassword(e.target.value)}
				/>
				{isItRegister && (
					<TextInput
						type="password"
						name="repeatpassword"
						placeholder="Repeate Password"
						role="textbox"
						aria-label="repeatpassword"
						onChange={e => setRepaetPassword(e.target.value)}
					/>
				)}
				<Button primary label="Wyślij" type="submit" />
			</form>
			<Button
				primary
				label="Zaloguj"
				type="submit"
				name="btn-login"
				aria-label="btn-login"
				onClick={() => setisItRegister(false)}
			/>
			<Button
				primary
				label="Zarejestruj"
				type="submit"
				onClick={() => setisItRegister(true)}
			/>
			<ToastContainer />
		</>
	);
};

export default Authentication;
