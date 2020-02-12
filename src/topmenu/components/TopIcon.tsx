
import React from "react";
import * as styles from "./styles/Topicon";
import Tooltip from "rc-tooltip";
import * as Icons from "react-feather";
import cx from "classnames";

export const TopIcon = ({
    icon,
    tooltip,
    onClick,
    active
  }: {
    tooltip: string;
    icon: keyof typeof Icons;
    active?: boolean;
    onClick: () => void;
  }) => {
    const Ico = Icons[icon];
    return (
      <Tooltip placement="top" trigger={"hover"} overlay={tooltip}>
        <div className={cx(styles.Button, { active })} onClick={onClick}>
          <Ico size={16} />
        </div>
      </Tooltip>
    );
  };