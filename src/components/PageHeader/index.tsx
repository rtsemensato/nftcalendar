import React, { useEffect, useState } from "react";
import { MdMenu, MdMoreVert } from "react-icons/md";
import classNames from "classnames";

import { usePageHeader } from "../../contexts/PageHeaderContext";
import { useSidebar } from "../../contexts/SidebarContext";

import { DivNotifications } from "../DivNotifications";
import { DivUser } from "../DivUser";
import { Loading } from "../Loading";

import styles from "./styles.module.scss";

export function PageHeader() {
	const { isPageHeaderHidden, getUserData, getNotificationsData } = usePageHeader();
	const { toggleSidebarVisible } = useSidebar();
	const [user, setUser] = useState(null);
	const [notificationsList, setNotificationsList] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getContextData();
	}, []);

	async function getContextData() {
		// const user = await getUserData(1);
		// setUser(user);

		// const notificationsList = await getNotificationsData();
		// setNotificationsList(notificationsList);

		setIsLoading(false);
	}

	return isLoading ? (
		<Loading />
	) : (
		<header className={classNames(styles.header, { [styles.hide]: isPageHeaderHidden })}>
			<nav>
				<MdMenu className={styles.btnSidebar} onClick={toggleSidebarVisible} />
				<ul>
					<li>{/* <DivUser user={user} /> */}</li>
					<li>{/* <DivNotifications list={notificationsList} /> */}</li>
					<li>
						<div>
							<MdMoreVert onClick={toggleSidebarVisible} />
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
}
