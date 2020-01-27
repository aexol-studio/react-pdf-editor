import React from "react";
import { PartialObjects } from "../../../graphql-zeus";
import { Text } from "@react-pdf/renderer";
export interface TextBlockComponentProps {
  textBlock: PartialObjects["TextBlock"]
}

export const TextBlockComponent = ({ textBlock }: TextBlockComponentProps) => {
  if (!textBlock.text) {
    return <></>;
  }
  const baseStyle = {};
  const style = textBlock.styleJson ? JSON.parse(textBlock.styleJson) : {};
  return (
    <Text
      style={{
        ...baseStyle,
        ...style
      }}
    >
      {textBlock.text}
    </Text>
  );
};
