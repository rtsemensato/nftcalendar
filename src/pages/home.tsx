import React from "react";

import { useLogin } from "../contexts/LoginContext";

import styles from "./home.module.scss";

export default function Home() {
	const { isUserLoggedIn, userLogin } = useLogin();

	return <div className={styles.homeContainer}>Bem vindo {userLogin}</div>;
}
