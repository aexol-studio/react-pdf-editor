import * as React from "react";
import * as styles from "../styles/ButtonSimple";
export interface ButtonSimpleProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const ButtonSimple = ({ children, onClick }: ButtonSimpleProps) => (
  <div className={styles.Main} onClick={onClick}>
    {children}
  </div>
);
