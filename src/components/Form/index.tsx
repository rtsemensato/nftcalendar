import React, { FormHTMLAttributes, ReactNode } from "react";

import styles from "./styles.module.scss";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
	children: ReactNode;
};

export function Form({ children, ...props }: FormProps) {
	return (
		<form className={styles.formContainer} {...props}>
			{children}
		</form>
	);
}
