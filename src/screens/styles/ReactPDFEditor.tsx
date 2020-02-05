import { style, fontFace } from "typestyle";
import { Colors } from "../../components/styles/Colors";
import { TOPHEIGHT } from "../../constants";

fontFace({
  fontFamily: 'Fira Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'https://fonts.googleapis.com/css?family=Fira+Sans&display=swap',
});

export const Actions = style({
  display: "flex"
});
export const SplitScreen = style({
  $debugName: "SplitScreen",
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "stretch",
  height: `calc( 100% - ${TOPHEIGHT}px )`
});

export const Left = style({
  $debugName: "Left",
  flex: 1,
  padding: `${TOPHEIGHT}px 30px`,
  background: `#f9f9f9`,
  overflowY: "auto",
  height: "100%",
  $nest: {
    "*": {
      maxWidth: "100%"
    }
  }
});

export const Right = style({
  $debugName: "Right",
  width: "50%",
  height: "100%",
  overflowY: "hidden",
  background: `#f9f9f9`,
  padding: `${TOPHEIGHT}px 30px`,
  $nest: {
    "*": {
      maxWidth: "100%"
    }
  }
});

export const SectionTitle = style({
  $debugName: "SectionTitle",
  fontFamily: "Fira Sans",
  fontSize: 16,
  paddingBottom: 5,
  borderBottom: `1px dashed ${Colors["Ancient Stone"]}`
});

export const EyePlacement = style({
  $debugName: "EyePlacement",
  position: "absolute",
  right: 30,
  top: 0,
  height: TOPHEIGHT,
  display: "flex",
  alignItems: "center"
});
