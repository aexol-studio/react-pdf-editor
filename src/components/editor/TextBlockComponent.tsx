import React, { useEffect, useRef } from "react";
import { PartialObjects } from "../../graphql-zeus";
import * as styles from "./styles/TextBlock";

export interface TextBlockComponentProps {
  textBlock: PartialObjects["TextBlock"];
  onChange: () => void;
}

// export interface TextBlockComonentState{
//   height: number;
//   rows: number;
//   minRows: number;
//   maxRows: number;
// }

export const TextBlockComponent = ({
  onChange,
  textBlock

}:  TextBlockComponentProps) => {
  const inref = useRef(null);
  useEffect(() => {}, [inref]);


  // https://codepen.io/liborgabrhel/pen/eyzwOx

  return (
    <textarea
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
