import classNames from "classnames";
import React, { ReactNode } from "react";
import { MdClose } from "react-icons/md";

import styles from "./styles.module.scss";

type ModalProps = {
	children: ReactNode;
	id?: string;
	isVisible: boolean;
	toogleIsModalVisible: () => void;
};

export function ModalLocal({ children, id, isVisible, toogleIsModalVisible }: ModalProps) {
	function handleModalContainerClick(event) {
		if (event.target.getAttribute("data-name") === "modalContainer") {
			toogleIsModalVisible();
		}
	}

	return (
		<div
			className={classNames(styles.modalContainer, { [styles.show]: isVisible })}
			data-name="modalContainer"
			onClick={handleModalContainerClick}>
			<main className={classNames(styles.content, { [styles.show]: isVisible })}>
				<MdClose size="1.5rem" className={styles.btnClose} onClick={toogleIsModalVisible} />
				<div id={id} className={styles.modalBody}>
					{children}
				</div>
			</main>
		</div>
	);
}
