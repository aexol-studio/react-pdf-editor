import * as React from "react";
import { PartialObjects } from "../../../graphql-zeus";
import { FeatureComponent } from "./FeatureComponent";
import { View } from "@react-pdf/renderer";
export interface StackComponentProps {
  stack: PartialObjects["Stack"];
  version: string;
}

export const StackComponent = ({ stack, version }: StackComponentProps) => {
  if (!stack.items || stack.items.length === 0) {
    return <></>;
  }
  const style = stack.styleJson ? JSON.parse(stack.styleJson) : {};
  return (
    <View style={style}>
      {stack.items.map((i, index) => (
        <FeatureComponent version={version} feature={i} key={index} />
      ))}
    </View>
  );
};
