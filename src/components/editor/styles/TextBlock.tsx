import { style } from "typestyle";
import { Colors } from "../../../Colors";

export const Main = style({
  $debugName: "TextBlockMain",
  display: "flex",
  // border: 0,
  marginTop: 5,
  padding: 10,
  width: "100%",
  background: Colors.White,
  fontFamily: "Fira Sans",
  border: "1px solid #DFE6F7",
  borderRadius: 5
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
  fontWeight: "bold",
  display: 'flex',
  alignSelf: 'center'
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
  justifyContent: "center",
  marginTop: '5px',
  marginBottom: '5px'
});

export const TextBlockContainer = style({
  $debugName: "TextBlockContainer",
  width: "100%"
})
