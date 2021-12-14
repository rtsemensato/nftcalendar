import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { useLogin } from "../contexts/LoginContext";

import styles from "./home.module.scss";

export default function Home() {
	const { isUserLoggedIn, userLogin } = useLogin();
	const router = useRouter();

	useEffect(() => {
		if (!isUserLoggedIn) {
			router.push("/login");
		}
	}, []);

	return <div className={styles.homeContainer}>Bem vindo {userLogin}</div>;
}
