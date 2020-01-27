import * as React from "react";
import { BuiltInStyles, PartialObjects } from "../../../graphql-zeus";
import { ColumnsComponent } from "./ColumnsComponent";
import ReactPDF, { View } from "@react-pdf/renderer";

export interface TableBlockComponentProps {
  tableBlock: PartialObjects["TableBlock"];
  version: string;
}

export const TableBlockComponent = ({
  tableBlock,
  version
}: TableBlockComponentProps) => {
  let style: ReactPDF.Style = tableBlock.styleJson
    ? JSON.parse(tableBlock.styleJson)
    : {};
  const border = tableBlock.style === BuiltInStyles.LIGHT_BORDER_TABLE;
  if (border) {
    style = {
      ...style,
      borderColor: "#444444",
      borderStyle: "solid",
      borderLeftWidth: 0.25
    };
  }
  return (
    <View style={style}>
      {tableBlock.rows &&
        tableBlock.rows.map((i, index) => (
          <ColumnsComponent
            version={version}
            key={index}
            columns={(i as unknown) as PartialObjects["Columns"]}
            widths={tableBlock.widths!.map(w => w.S!)}
            border={border}
          />
        ))}
    </View>
  );
};
