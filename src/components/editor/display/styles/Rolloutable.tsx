import { style } from "typestyle";
import { Colors } from "../../../styles/Colors";
import { transition } from "../../../../constants";
export const Title = style({
  cursor: "pointer",
  fontWeight: "bold",
  color: Colors["Black Hole"],
  fontSize: 10,
  marginBottom: 10,
  display: "flex",
  alignItems: "center"
});
export const Children = style({});

export const Main = style({
  padding: `5px 10px 5px`,
  flex: 1,
  borderRadius: 10,
  transition: transition,
  marginBottom: 10,
  border: `1px dashed ${Colors.Foggy}`
});
