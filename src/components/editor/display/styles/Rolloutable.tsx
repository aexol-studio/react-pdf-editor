import { style } from "typestyle";
import { Colors } from "@/Colors";
import { transition } from "@/constants";
export const Title = style({
  $debugName: "RolloutableTitle",
  cursor: "pointer",
  fontWeight: "bold",
  color: Colors["Black Hole"],
  fontSize: 12,
  marginBottom: 10,
  display: "flex",
  alignItems: "center"
});
export const RolloutableChildren = style({
  $debugName: "RolloutableChildren",

});

export const RolloutableMain = style({
  $debugName: "RolloutableMain",
  padding: `5px 10px 5px`,
  flex: 1,
  borderRadius: 10,
  transition: transition,
  marginBottom: 10,
  border: `1px dashed ${Colors.Foggy}`
  // border: `2px dashed red`
});
