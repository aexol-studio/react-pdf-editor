import * as React from "react";
import * as styles from "../styles/IconButton";
export interface IconButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const IconButton = ({ children, onClick }: IconButtonProps) => (
  <div className={styles.Main} onClick={onClick}>
    {children}
  </div>
);
