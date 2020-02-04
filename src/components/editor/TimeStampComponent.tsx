import React from "react";
import * as styles from "./styles/TextBlock";
import {TimeStampComponentTxt} from '../models'
export interface TimeStampComponentProps {}

export const TimeStampComponent = ({}: TimeStampComponentProps) => {
return <div className={styles.Main}>{`${TimeStampComponentTxt.Date}`}</div>;
};
