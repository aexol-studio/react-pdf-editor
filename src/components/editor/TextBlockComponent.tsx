import React, { useEffect, useRef, useState } from "react";
import { PartialObjects } from "../../graphql-zeus";
import * as styles from "./styles/TextBlock";
const rowHeight = 36;
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
}: TextBlockComponentProps) => {
  const inref = useRef<HTMLTextAreaElement>(null);

  const [height, setHeight] = useState(1);

  const resizeTextArea = () => {
    return;
    // return inref && inref.current ? inref.current.scrollHeight/inref.current.rows: 2;
  };

  const onResize = (scrollHeight: number) => {
    const rows = Math.ceil(scrollHeight / rowHeight);

    setHeight(rows);
    console.log(scrollHeight);
  };

  useEffect(() => {
    resizeTextArea;
  }, [inref]);
  return (
    <textarea
      style={{
        height: "auto",
        overflowY: "hidden",
        // lineHeight: `${rowHeight}px`
      }}
      // rows={resizeTextArea()}
      rows={height}
      ref={inref}
      className={styles.Main}
      value={textBlock.text}
      placeholder=""
      onChange={e => {
        textBlock.text = e.target.value;
        onChange();
        console.log(e.target.scrollHeight, "-----------");
        onResize(e.target.scrollHeight);
      }}
    />
  );
};
