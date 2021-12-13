import React, { createContext, ReactNode, useContext, useState } from "react";

type DialogBoxContextType = {
	isDialogBoxVisible: boolean;
	dialogBoxMessage: string;
	openDialogBox: (message: string) => void;
	toogleIsDialogBoxVisible: () => void;
};

type DialogBoxContextProviderProps = {
	children: ReactNode;
};

export const DialogBoxContext = createContext({} as DialogBoxContextType);

export function DialogBoxContextProvider({ children }: DialogBoxContextProviderProps) {
	const [isDialogBoxVisible, setIsDialogBoxVisible] = useState(false);
	const [dialogBoxMessage, setDialogBoxMessage] = useState("");

	function openDialogBox(message: string) {
		setDialogBoxMessage(message);
		setIsDialogBoxVisible(true);
	}

	function toogleIsDialogBoxVisible() {
		setIsDialogBoxVisible(!isDialogBoxVisible);
	}

	return (
		<DialogBoxContext.Provider
			value={{ isDialogBoxVisible, dialogBoxMessage, openDialogBox, toogleIsDialogBoxVisible }}>
			{children}
		</DialogBoxContext.Provider>
	);
}

export const useDialogBox = () => {
	return useContext(DialogBoxContext);
};
