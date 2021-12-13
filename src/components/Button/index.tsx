import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	tip?: string;
	appearance?: "primary" | "secondary" | "success" | "caution" | "danger";
};

export function Button(props: ButtonProps) {
	return (
		<button className={classNames(styles.button, styles[props.appearance])} data-tip={props.tip} {...props}>
			{props.children}
		</button>
	);
}
