import { style } from "typestyle";
import { Colors } from "./Colors";
import { transition } from "../../constants";
export const Main = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: Colors["Ancient Stone"],
  background: Colors.White,
  padding: `4px 8px`,
  borderRadius: 3,
  cursor: "pointer",
  transition,
  $nest: {
    "&:hover": {
      background: Colors["Outer Space"],
      color: Colors["White"]
    },
    span: {
      fontSize: 10,
      marginRight: 5,
      textTransform: "uppercase"
    }
  }
});
