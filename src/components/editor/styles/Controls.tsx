import { style } from "typestyle";
import { Colors } from "../../styles/Colors";
import { transition } from "../../../constants";

export const Main = style({
  $debugName: "ControlsMain",
  display: "flex",
  justifyContent: "flex-start",
  borderRadius: 2,
  alignItems: "baseline",
  position: "relative"
});
export const Category = style({
  $debugName: "ControlsCategory",
  display: "flex",
  justifyContent: "flex-start",
  borderRadius: 2,
  flexWrap: "wrap"
});

export const Button = style({
  $debugName: "ControlsButton",
  fontSize: 10,
  padding: `5px 12px`,
  background: Colors.White,
  // color: Colors.White,
  borderRadius: 2,
  cursor: "pointer",
  margin: `0 5px 5px 0`,
  border: '1px solid black',
  // cursor: "pointer",
  transition,
  $nest: {
    "&:hover": {
      background: Colors["Outer Space"],
      color: Colors["White"]
    }
  }
});
export const MenuHeader = style({
  $debugName:"ControlsMenuHandler",
  fontSize: 10,
  fontWeight: "bold",
  color: Colors.Ashes,
  marginTop: 10
});
export const Menu = style({
  $debugName: "ControlsMenu",
  padding: 20,
  width: 300,
  borderRadius: 4,
  boxShadow: `#000a 0px 3px 10px`,
  background: Colors.White,
  zIndex: 4
});
export const Overlay = style({
  $debugName: "ControlsOverlay",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  background: `${Colors.Black}aa`,
  zIndex: 3,
  padding: '15%'
});
export const PlusMinus = style({
  $debugName: "ControlsPlusMinus",
  color: Colors["Ancient Stone"],
  padding: 5,
  cursor: "pointer",
  $nest: {
    "&:hover": {
      color: Colors.Cooler
    }
  }
});
 