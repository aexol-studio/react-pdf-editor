import { style } from "typestyle";
import { Colors } from "../../../Colors";

export const Main = style({
  $debugName: "TextBlockMain",
  display: "flex",
  border: 0,
  // padding: 15,
  width: "100%",
  background: Colors.White,
  fontFamily: "Fira Sans"
});
export const styleLabel = style({
  $debugName: "TextBlockStyleLabel",
  fontSize: 10,
  color: Colors.Black,
  padding: 5,
  textAlign: "center",
  cursor: "pointer"
});

export const TextBlockTitle = style({
  $debugName: "TextBlockTitle",
  fontSize: 12,
  margin: 0,
  fontWeight: "bold"
});

export const TextBlockSvg = style({
  $debugName: "TextBlockSvg",
  display: "flex",
  alignItems: "center",
  marginRight: 10
});

export const TextBlockTitleDiv = style({
  $debugName: "TextBlockTitleDiv",
  display: "flex",
  justifyContent: "center"
});

export const TextBlockContainer = style({
  $debugName: "TextBlockContainer",
  width: "100%"
})
