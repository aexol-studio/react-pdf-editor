import { style } from "typestyle";
import { Colors } from "../../styles/Colors";

export const Main = style({
  marginBottom: 10
});
export const FeatureOptions = style({
  display: "flex",
  flexFlow: "row nowrap",
  flexDirection: "row-reverse"
});
export const MiniIcon = style({
  cursor: "pointer",
  alignSelf: "flex-start",
  marginRight: 5,
  color: Colors.Androgyn
});

export const Delete = style({
  $nest: {
    "&:hover": {
      color: Colors["Cherry Bomb"]
    }
  }
});

export const Edit = style({
  $nest: {
    "&:hover": {
      color: Colors["Super Nova"]
    }
  }
});
