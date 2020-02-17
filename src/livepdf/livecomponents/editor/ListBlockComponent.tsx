import * as React from "react";
import { PartialObjects } from "../../../graphql-zeus";
import { FeatureComponent } from "./FeatureComponent";
import { View, Text } from "@react-pdf/renderer";
export interface ListBlockComponentProps {
  listBlock: PartialObjects["ListBlock"];
  version: string;
}

export const ListBlockComponent = ({
  listBlock,
  version
}: ListBlockComponentProps) => {
  const style = listBlock.styleJson ? JSON.parse(listBlock.styleJson) : {};
  return (
    <View style={style}>
      {listBlock.items &&
        listBlock.items.map((i, index) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap"
            }}
            key={`${index}-${i.__typename}`}
          >
            <Text
              style={{
                marginRight: 10
              }}
            >
              •
            </Text>
            <FeatureComponent version={version} feature={i} key={index} />
          </View>
        ))}
    </View>
  );
};
