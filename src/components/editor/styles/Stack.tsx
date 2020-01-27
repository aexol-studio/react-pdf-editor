import { style } from "typestyle";
import { Colors } from "../../styles/Colors";

export const Main = style({
  padding: 10,
  border: `2px solid ${Colors["Bored Martian"]}`,
  borderTopWidth: 0,
  borderRightWidth: 0,
  marginBottom: 25
});
export const Title = style({
  cursor: "pointer",
  fontWeight: "bold"
});
