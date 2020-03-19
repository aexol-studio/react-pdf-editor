import { style } from "typestyle";
import { Colors } from "../../../Colors";
import { transition } from "../../../constants";

export const Main = style({
  $debugName: "ControlsMain",
  display: "flex",
  justifyContent: "flex-start",
  borderRadius: 2,
  alignItems: "start",
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
  borderRadius: 2,
  cursor: "pointer",
  margin: `0 5px 5px 0`,
  border: "1px solid black",
  transition,
  $nest: {
    "&:hover": {
      background: Colors["Outer Space"],
      color: Colors["White"]
    }
  }
});
export const MenuHeader = style({
  $debugName: "ControlsMenuHandler",
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
  // position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "start",
  justifyContent: "left",
  // background: `${Colors.Black}aa`,
  background: '#f9f9f9',
  zIndex: 3,
  paddingLeft: '5%'
  // padding: "15%"
});
export const PlusMinus = style({
  $debugName: "ControlsPlusMinus",
  color: Colors["Ancient Stone"],
  padding: 5,
  width: '100%',
  cursor: "pointer",
  $nest: {
    "&:hover": {
      color: Colors.Cooler
    }
  }
})
  export const ShowHide = style ({
    $debugName: 'ShowHide',
    padding: `5px 10px 5px`,
    // flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    transition: transition,
    marginBottom: 10,
    border: `3px dashed ${Colors.Foggy}`
  })
;
