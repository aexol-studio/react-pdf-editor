import React, { useState, useEffect } from "react";
import * as styles from "./styles/SelectInput";
import * as sharedStyles from "./styles/Shared";
import { fonts } from "../../livepdf/PDFDocument";

export const SelectInput = ({
  value,
  onChange
}: {
  value: string;
  onChange: (e: string) => void;
}) => {
  const [v, setV] = useState("Fira Sans");
  useEffect(() => {
    setV(value);
  }, [value]);

  const availableFonts = fonts.map((f: typeof fonts[0]) => f.family);

  return (
    <div className={sharedStyles.Placement}>
      <select
        className={styles.Select}
        value={v}
        onChange={e => {
          setV(e.target.value);
        }}
        onBlur={() => {
          onChange(v);
        }}
      >
        {availableFonts.map((f: string) => (
          <option value={f}>{f}</option>
        ))}
      </select>
    </div>
  );
};
