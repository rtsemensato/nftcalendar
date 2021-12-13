import React, { LabelHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { FaQuestionCircle } from "react-icons/fa";
import { MdStar } from "react-icons/md";

import styles from "./styles.module.scss";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
	children: ReactNode;
	hint?: string;
	mandatory?: boolean;
};

export function Label({ children, hint, mandatory, ...props }: LabelProps) {
	return (
		<label className={classNames(styles.labelContainer)} {...props}>
			{children}
			{hint && (
				<span className={styles.hint} data-hint={hint ? hint : undefined}>
					<FaQuestionCircle />
				</span>
			)}
			{mandatory && (
				<span className={styles.mandatory}>
					<MdStar />
				</span>
			)}
		</label>
	);
}
