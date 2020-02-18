import React from "react";
import { PartialObjects } from "../../../graphql-zeus";
import { Text } from "@react-pdf/renderer";
export interface TimeStampComponentProps {
  timeStamp: PartialObjects["TimeStamp"];
  version: string;
}

export const TimeStampComponent = ({
  timeStamp,
  version
}: TimeStampComponentProps) => {
  const baseStyle = {};
  const style = timeStamp.styleJson ? JSON.parse(timeStamp.styleJson) : {};
  return (
    <Text
      style={{
        ...baseStyle,
        ...style,
      }}
    >
      {version}
    </Text>
  );
};
