import { style, classes } from "typestyle";
import { Colors } from "../../../Colors";
import { TOPHEIGHT } from "../../../constants";
export const Main = style({
  $debugName: "TopMenuMain",
  fontFamily: "Fira Sans",
  background: Colors.White,
  display: "flex",
  boxShadow: `${Colors["Dark Side"]}44 2px 5px 14px`,
  height: TOPHEIGHT,
  paddingLeft: 30
});
export const Placement = style({
  $debugName: "TopMenuPlacement",
  padding: 5,
  display: "flex",
  alignItems: "center"
});

export const Button = classes(
  Placement,
  style({
    $debugName: "TopMenuButton",
    cursor: "pointer",
    color: Colors["Androgyn"],
    $nest: {
      "&:hover,&.active": {
        color: Colors["Rising Embers"]
      }
    }
  })
);
export const Input = style({
  $debugName: "TopMenuInput",
  width: 40
});
export const ColorPicker = style({
  $debugName: "TopMenuColorPicker",
  marginTop: 10
});
