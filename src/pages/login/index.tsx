import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { IoEye, IoEyeOff } from "react-icons/io5";
import cogoToast from "cogo-toast";

import { useLogin } from "../../contexts/LoginContext";

import styles from "./styles.module.scss";

export default function Login() {
	const { login } = useLogin();
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const router = useRouter();
	const loginInput = useRef(null);
	const passwordInput = useRef(null);

	useEffect(() => {
		loginInput.current.focus();
	}, []);

	async function handleFormSubmit(event: React.FormEvent) {
		event.preventDefault();

		const user = {
			login: loginInput.current.value,
			password: passwordInput.current.value,
		};

		// const config = {
		// 	headers: {
		// 		login: user.login,
		// 		password: user.password,
		// 	},
		// };

		const users = ["ricardo", "samuel"];

		console.log(user);

		if (users.includes(user.login, 0) && user.password === "bundinha123") {
			localStorage.setItem("@nftcalendar/userLogin", user.login);
			login(user.login);
			router.push("/home");
		} else {
			cogoToast.error("Usuário ou senha inválidos");
		}

		// try {
		// 	const baseUrl = `http://${window.location.hostname}:5100/`;

		// 	const apiLocal = axios.create({
		// 		baseURL: baseUrl,
		// 	});

		// 	const { status, data } = await apiLocal.get("authenticate", config);

		// 	if (status === 200) {
		// 		localStorage.setItem("@nftcalendar/token", data.stoken);
		// 		localStorage.setItem("@nftcalendar/userId", data.user.idUsuario);
		// 		localStorage.setItem("@nftcalendar/userName", data.user.sLogin);
		// 		login(data.user.idUsuario, data.user.sLogin);
		// 		router.push("/apes-local/home");
		// 	}
		// } catch (error) {
		// 	cogoToast.error("Usuário ou senha inválidos");
		// }
	}

	return (
		<div className={styles.loginContainer}>
			<form onSubmit={handleFormSubmit} autoComplete="off">
				<div>
					<strong className={styles.title}>NFT CALENDAR</strong>
				</div>
				<div>
					<div className={styles.inputContainer}>
						<input
							type="text"
							id="login"
							className={styles.login}
							ref={loginInput}
							required
							autoComplete="off"
						/>
						<label htmlFor="login">Usuário</label>
					</div>
					<div className={styles.inputContainer}>
						<input
							type={isPasswordVisible ? "text" : "password"}
							id="password"
							className={styles.password}
							autoComplete="off"
							ref={passwordInput}
							required
						/>
						<label htmlFor="password">Senha</label>
						{isPasswordVisible ? (
							<IoEyeOff onClick={() => setIsPasswordVisible(false)} />
						) : (
							<IoEye onClick={() => setIsPasswordVisible(true)} />
						)}
					</div>
					<button>Login</button>
				</div>
			</form>
		</div>
	);
}
