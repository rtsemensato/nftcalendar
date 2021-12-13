import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	tip?: string;
  }

export function ButtonTransparent(props: ButtonProps) {
	return (
		<button className={styles.button} data-tip={props.tip} {...props} >
			{props.children}
		</button>
	);
}