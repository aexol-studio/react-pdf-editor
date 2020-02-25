import * as React from "react";
import { PartialObjects } from "../../../graphql-zeus";
import { TextBlockComponent } from "./TextBlockComponent";
import { ImageComponent } from "./ImageComponent";
import { StackComponent } from "./StackComponent";
import { TableBlockComponent } from "./TableBlockComponent";
import { ListBlockComponent } from "./ListBlockComponent";
import { TimeStampComponent } from "./TimeStampComponent";

export interface FeatureComponentProps {
  feature: PartialObjects["Feature"];
  version: string;
  [k: string]: unknown;
}

const FeatureComp = (props: FeatureComponentProps) => {
  const { feature, version } = props;
  if (isTimeStamp(feature)) {
    return <TimeStampComponent version={version} timeStamp={feature} />;
  }
  if (isTextBlock(feature)) {
    return <TextBlockComponent textBlock={feature} />;
  }
  if (isImage(feature)) {
    return <ImageComponent image={feature} />;
  }
  if (isStack(feature)) {
    return <StackComponent {...props} stack={feature} />;
  }
  if (isTableBlock(feature)) {
    return <TableBlockComponent version={version} tableBlock={feature} />;
  }
  if (isListBlock(feature)) {
    return <ListBlockComponent version={version} listBlock={feature} />;
  }
  return <div />;
};
export const FeatureComponent = (props: FeatureComponentProps) => {
  return <FeatureComp {...props} />;
};

export const isTimeStamp = (arg: any): arg is PartialObjects["TimeStamp"] => {
  return arg.__typename === "TimeStamp";
};
export const isTextBlock = (arg: any): arg is PartialObjects["TextBlock"] => {
  return arg.__typename === "TextBlock";
};
export const isColumns = (arg: any): arg is PartialObjects["Columns"] => {
  return arg.__typename === "Columns";
};
export const isColumn = (arg: any): arg is PartialObjects["Column"] => {
  return arg.__typename === "Column";
};
export const isStack = (arg: any): arg is PartialObjects["Stack"] => {
  return arg.__typename === "Stack";
};
export const isListBlock = (arg: any): arg is PartialObjects["ListBlock"] => {
  return arg.__typename === "ListBlock";
};
export const isTableBlock = (arg: any): arg is PartialObjects["TableBlock"] => {
  return arg.__typename === "TableBlock";
};
export const isImage = (arg: any): arg is PartialObjects["Image"] => {
  return arg.__typename === "Image";
};
export const isFeature = (arg: any): arg is PartialObjects["Feature"] => {
  return !!arg.__typename;
};
