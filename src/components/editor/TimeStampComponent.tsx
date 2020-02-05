import React from "react";
import * as styles from "./styles/TextBlock";
// import { TimeStampComponentTxt } from "../../models";
import { translated } from "../../models";
export interface TimeStampComponentProps {}



export const TimeStampComponent = ({}: TimeStampComponentProps) => {
  const t = translated("TimeStampComponentTxt");
  return <div className={styles.Main}>{`${t("Date")}`}</div>;
};
