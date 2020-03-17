import { style } from "typestyle";

export const ImageWrap = style({
  $debugName: "ImageWrap",
  display: "flex",
  marginTop: 5,
  flexFlow: "column nowrap"
});
export const ImageMain = style({
  $debugName: "ImageMain",
  width: 30,
  height: "auto",
  marginRight: 10,
  maxWidth: 100
});

export const ImageTitle = style({
  $debugName: "ImageTitle",
  fontSize: 12,
  margin: 0,
  fontWeight: "bold",
  display: "flex",
  alignSelf: "center"
});

export const ImageTitleDiv = style({
  $debugName: "ImageTitleDiv",
  display: "flex",
  justifyContent: "center",
  marginTop: "5px",
  marginBottom: '5px'
});
