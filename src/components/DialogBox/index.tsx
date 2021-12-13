import React from "react";
import { IoWarning } from "react-icons/io5";

import { Button } from "../Button";

import { useDialogBox } from "../../contexts/DialogBoxContext";

import styles from "./styles.module.scss";

type DialogBoxProps = {
	handleConfirmClick: (args?: any) => void;
};

export function DialogBox(props: DialogBoxProps) {
	const { isDialogBoxVisible, dialogBoxMessage, toogleIsDialogBoxVisible } = useDialogBox();

	function handleConfirmClick() {
		props.handleConfirmClick();
		toogleIsDialogBoxVisible();
	}

	return (
		<>
			{isDialogBoxVisible && (
				<div className={styles.dialogBoxContainer}>
					<div className={styles.content}>
						<header>
							<IoWarning color="#999" size="6rem" />
						</header>
						<main>
							<strong>{dialogBoxMessage}</strong>
							<small>Esta ação não poderá ser revertida!</small>
						</main>
						<footer>
							<Button onClick={() => handleConfirmClick()}>Sim</Button>
							<Button onClick={toogleIsDialogBoxVisible}>Não</Button>
						</footer>
					</div>
				</div>
			)}
		</>
	);
}
