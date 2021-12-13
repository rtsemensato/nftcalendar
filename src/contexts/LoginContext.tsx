import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type LoginContextData = {
	isUserLoggedIn: boolean;
	userId: number;
	userName: string;
	login: (id: number, name: string) => void;
	logout: () => void;
};

export const LoginContext = createContext({} as LoginContextData);

type LoginContextProviderProps = {
	children: ReactNode;
};

export function LoginContextProvider({ children }: LoginContextProviderProps) {
	const [userId, setUserId] = useState(0);
	const [userName, setUserName] = useState("");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	useEffect(() => {
		const id = localStorage.getItem("@apes/userId") ? parseInt(localStorage.getItem("@apes/userId")) : 0;
		const name = localStorage.getItem("@apes/userName") ? localStorage.getItem("@apes/userName") : "";

		setUserName(name);
		setUserId(id);
	}, []);

	function login(id: number, name: string) {
		setIsUserLoggedIn(true);
		setUserId(id);
		setUserName(name);
	}

	function logout() {
		setIsUserLoggedIn(false);
	}

	return (
		<LoginContext.Provider
			value={{
				userId,
				userName,
				isUserLoggedIn,
				login,
				logout,
			}}>
			{children}
		</LoginContext.Provider>
	);
}

export const useLogin = () => {
	return useContext(LoginContext);
};
