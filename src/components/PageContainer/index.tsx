import { ReactNode } from "react";

import styles from "./styles.module.scss";

type ContainerProps = {
    children: ReactNode;
}

export function PageContainer({children}: ContainerProps) {
    return (
        <div className={styles.pageContainer}>
            {children}
        </div>
    );
}
