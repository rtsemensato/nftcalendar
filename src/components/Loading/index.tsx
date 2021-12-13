import { LoopCircleLoading } from "react-loadingg";

import styles from "./styles.module.scss";

export function Loading() {
	return (
		<div className={styles.loadingContainer}>
			<LoopCircleLoading color="hsl(var(--color-secondary-500))" />
		</div>
	);
}
