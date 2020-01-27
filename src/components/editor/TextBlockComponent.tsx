import React, { useEffect, useRef } from "react";
import { PartialObjects } from "../../graphql-zeus";
import * as styles from "./styles/TextBlock";
export interface TextBlockComponentProps {
  textBlock: PartialObjects["TextBlock"];
  onChange: () => void;
}

export const TextBlockComponent = ({
  onChange,
  textBlock
}: TextBlockComponentProps) => {
  const inref = useRef(null);
  useEffect(() => {}, [inref]);
  return (
    <input
      ref={inref}
      className={styles.Main}
      value={textBlock.text}
      placeholder=""
      onChange={e => {
        textBlock.text = e.target.value;
        onChange();
      }}
    />
  );
};
