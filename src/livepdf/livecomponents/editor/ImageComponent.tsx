import React from "react";
import { PartialObjects } from "@/graphql-zeus";
import ReactPDF, { Image as ReactImage } from "@react-pdf/renderer";

export interface ImageComponentProps {
  image: PartialObjects["Image"];
}

export const ImageComponent = ({ image }: ImageComponentProps) => {
  if (!image.base64 || !image.width || !image.height) {
    return <></>;
  }
  const imageStyle = image.styleJson ? JSON.parse(image.styleJson) : {};
  let style: ReactPDF.Style = {
    ...imageStyle
  };
  if (image.width) {
    style = {
      ...style,
      width: image.width
    };
  }
  if (image.height) {
    style = {
      ...style,
      height: image.height
    };
  }
  return <ReactImage style={style} src={image.base64} />;
};
