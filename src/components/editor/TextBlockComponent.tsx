import React, { useRef, useEffect } from "react";
import { PartialObjects } from "../../graphql-zeus";
import * as styles from "./styles/TextBlock";
export interface TextBlockComponentProps {
  textBlock: PartialObjects["TextBlock"];
  onChange: () => void;
}

const AutoResizeTextArea = (
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) => {
  const tRef = useRef<HTMLTextAreaElement>(null);
// przez useRef jest dostęp do DOMa przeglądarki


  useEffect(() => {
    if (tRef.current) {
      tRef.current.setAttribute("style", "height: auto;");
      //setAttribute

      tRef.current.setAttribute(
        "style",
        `height: ${tRef.current.scrollHeight}px;`
      );
    }
  }, [props.value]);
  return <textarea ref={tRef} {...props} value={props.value} />;
};
export const TextBlockComponent = ({
  onChange,
  textBlock
}: TextBlockComponentProps) => {
  return (
    <AutoResizeTextArea
      rows={1}
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
