import React, { useState, useEffect } from "react";
import * as styles from "./styles/SmallInput";
import * as sharedStyles from "./styles/Shared";
export const SmallInput = ({
  value,
  onChange
}: {
  value: string;
  onChange: (e: string) => void;
}) => {
  const [v, setV] = useState("0");
  useEffect(() => {
    setV(value);
  }, [value]);
  return (
    <div className={sharedStyles.Placement}>
      <input
        className={styles.Input}
        type="number"
        min='0'
        value={v}
        onChange={e => {
          setV(e.target.value);
        }}
        onBlur={() => {
          // console.log(v)
          onChange(v);
        }}
      />
    </div>
  );
};
