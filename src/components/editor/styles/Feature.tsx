import { style } from "typestyle";
import { Colors } from "../../styles/Colors";

export const FeatureMain = style({
  $debugName: "FeatureMain",
  marginBottom: 10,
  display: "flex",
  border: '2px dashed green'
});
export const FeatureOptions = style({
  $debugName: "FeatureOptions",
  display: "flex",
  flexFlow: "row nowrap",
  flexDirection: "row-reverse"
});
export const MiniIcon = style({
  $debugName: "FeatureMiniIcon",
  cursor: "pointer",
  alignSelf: "flex-start",
  marginRight: 5,
  color: Colors.Androgyn
});

export const Delete = style({
  $debugName: "FeatureDelete",
  $nest: {
    "&:hover": {
      color: Colors["Cherry Bomb"]
    }
  }
});

export const Edit = style({
  $debugName: "FeatureEdit",
  $nest: {
    "&:hover": {
      color: Colors["Super Nova"]
    }
  }
});
