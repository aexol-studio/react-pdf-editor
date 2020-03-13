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
  if (!listBlock.items || listBlock.items.length === 0) {
    return <></>;
  }

  const style = listBlock.styleJson ? JSON.parse(listBlock.styleJson) : {};
  return (
    <View style={style}>
      {listBlock.items &&
        listBlock.items.map((i, index) => (
          <View
            style={{
              marginTop: 5,
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
            <FeatureComponent version={version} feature={i} />
          </View>
        ))}
    </View>
  );
};
