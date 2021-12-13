import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { createContext, ReactNode, useContext, useState } from "react";

import { apiFakeServer } from "../services/api";

import { Notification } from "../types/Notification";
import { Usuario } from "../types/Usuario";

type PageHeaderContextData = {
	isPageHeaderHidden: boolean;
	hidePageHeader: () => void;
	showPageHeader: () => void;
	getUserData: (id: number) => Promise<Usuario>;
	getNotificationsData: () => Promise<Notification[]>;
};

export const PageHeaderContext = createContext({} as PageHeaderContextData);

type PageHeaderContextProviderProps = {
	children: ReactNode;
};

export function PageHeaderContextProvider({ children }: PageHeaderContextProviderProps) {
	const [isPageHeaderHidden, setIsPageHeaderHidden] = useState(false);

	async function getUserData(id: number): Promise<Usuario> {
		const { data: userData } = await apiFakeServer.get(`userGet/${id}`);

		return userData;
	}

	async function getNotificationsData(): Promise<Notification[]> {
		const { data: notificationsData } = await apiFakeServer.get("notificationGet");

		const notificationsList = notificationsData.map((notification: Notification) => {
			return {
				id: notification.id,
				description: notification.description,
				type: notification.type,
				dateTimeReceived: format(parseISO(notification.dateTimeReceived), "dd/MM/yyyy h:m:s", { locale: ptBR }),
			};
		});

		return notificationsList;
	}

	function hidePageHeader() {
		setIsPageHeaderHidden(true);
	}

	function showPageHeader() {
		setIsPageHeaderHidden(false);
	}

	return (
		<PageHeaderContext.Provider
			value={{
				isPageHeaderHidden,
				hidePageHeader,
				showPageHeader,
				getUserData,
				getNotificationsData,
			}}>
			{children}
		</PageHeaderContext.Provider>
	);
}

export const usePageHeader = () => {
	return useContext(PageHeaderContext);
};
