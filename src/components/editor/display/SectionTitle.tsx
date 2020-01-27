import * as React from "react";
import * as styles from "./styles/SectionTitle";
export const SectionTitle = (props: { children: React.ReactNode }) => (
  <div className={styles.Main}>{props.children}</div>
);
