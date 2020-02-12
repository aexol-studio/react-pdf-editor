import { style } from "typestyle";
import { Colors } from "../../Colors";
import { transition } from "../../constants";
export const Main = style({
  $debugName: "ButtonSimpleMain",
  display: "inline-block",
  fontSize: 12,
  color: Colors["Outer Space"],
  padding: `5px 12px`,
  border: `1px solid`,
  borderRadius: 3,
  cursor: "pointer",
  transition,
  $nest: {
    "&:hover": {
      background: Colors["Outer Space"],
      color: Colors["White"]
    }
  }
});
