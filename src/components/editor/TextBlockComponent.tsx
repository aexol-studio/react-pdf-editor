import React, { useRef, useEffect } from "react";
import { PartialObjects } from "../../graphql-zeus";
import * as styles from "./styles/TextBlock";
import {
  DeleteAndEditIconsComponentProps,
  DeleteAndEditIconsComponent
} from "./display/DeleteAndEdit";
import { translated } from "../../models";

import { TopMenuProps, TopMenu } from "../../topmenu/index";
// import { Controls } from "./Controls";

// czy tutaj trzeba zrobić export interface ... extends Delete || TopMenuProps

// chyba tak

const t = translated("TextBlockComponentTxt");

export interface TextBlockComponentProps
  extends DeleteAndEditIconsComponentProps,
    TopMenuProps {
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
export const TextBlockComponent = (props: TextBlockComponentProps) => {
  const { onChange, textBlock } = props;
  return (
    <div
      style={{
        width: "100%"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <p
          style={{
            fontSize: 12,
            margin: 0
          }}
        >
          {t("TextBlockTitle")}
        </p>
        <DeleteAndEditIconsComponent {...props} />
      </div>
      <TopMenu editedFeature={textBlock} onChange={onChange} />
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
    </div>
  );
};
