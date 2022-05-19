import * as React from "react";
import { PartialObjects } from "@/graphql-zeus";
import { FeatureComponent } from "./FeatureComponent";
import ReactPDF, { View } from "@react-pdf/renderer";
export interface ColumnComponentProps {
  column: PartialObjects["Column"];
  flexBasis: string;
  border?: boolean;
  version: string;
}

export const ColumnComponent = ({
  column,
  flexBasis,
  border,
  version
}: ColumnComponentProps) => {
  const styleJSON: Partial<ReactPDF.Style> = column.styleJson
    ? JSON.parse(column.styleJson)
    : {};
  const { ...extractStyle } = styleJSON;
  let style: ReactPDF.Style = {
    ...extractStyle,
    width: flexBasis === "*" ? "auto" : flexBasis,
    textAlign: "left"
  };
  if (border) {
    style = {
      ...style,
      borderRightColor: `#444444`,
      borderRightWidth: 0.25,
      borderRightStyle: `solid`,
      display: "flex",
      paddingVertical: 5,
      paddingHorizontal: 6
    };
  }
  return (
    <View style={style}>
      {column.content && Object.keys(column.content).length > 0 && (
        <FeatureComponent version={version} feature={column.content!} />
      )}
    </View>
  );
};
