import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type LoginContextData = {
	isUserLoggedIn: boolean;
	userLogin: string;
	login: (login: string) => void;
	logout: () => void;
};

export const LoginContext = createContext({} as LoginContextData);

type LoginContextProviderProps = {
	children: ReactNode;
};

export function LoginContextProvider({ children }: LoginContextProviderProps) {
	const [userLogin, setUserLogin] = useState("");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	useEffect(() => {
		const login = localStorage.getItem("@nftcalendar/userLogin")
			? localStorage.getItem("@nftcalendar/userLogin")
			: "";

		setUserLogin(login);
	}, []);

	function login(login: string) {
		setIsUserLoggedIn(true);
		setUserLogin(login);
	}

	function logout() {
		setIsUserLoggedIn(false);
	}

	return (
		<LoginContext.Provider
			value={{
				userLogin,
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
