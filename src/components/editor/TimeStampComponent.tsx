import React from "react";
import * as styles from "./styles/TextBlock";
export interface TimeStampComponentProps {}

export const TimeStampComponent = ({}: TimeStampComponentProps) => {
  return <div className={styles.Main}>{`Date`}</div>;
};
