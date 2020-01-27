import { style, classes } from "typestyle";
import { Colors } from "./Colors";
import { TOPHEIGHT } from "../../constants";
export const Main = style({
  background: Colors.White,
  display: "flex",
  boxShadow: `${Colors["Dark Side"]}44 2px 5px 14px`,
  height: TOPHEIGHT,
  paddingLeft: 30
});
export const Placement = style({
  padding: 5,
  display: "flex",
  alignItems: "center"
});

export const Button = classes(
  Placement,
  style({
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
  width: 40
});
export const ColorPicker = style({
  marginBottom: -5
});
