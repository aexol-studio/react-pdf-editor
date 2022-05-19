import { style } from "typestyle";
import { Colors } from "@/Colors";

export const FeatureMain = style({
  $debugName: "FeatureMain",
  marginBottom: 10,
  display: "flex"
  // border: '2px dashed green'
});
export const FeatureOptions = style({
  $debugName: "FeatureOptions",
  display: "flex",
  flexFlow: "row nowrap",
  flexDirection: "row-reverse",
  width: "100%"
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

export const FeatureTitleDiv = style({
  $debugName: "FeatureTitleDiv",
  display: "flex",
  justifyContent: "space-between"
});

export const Basket = style({
  $debugName: "Basket",
  display: "flex",
  marginTop: 5,
  marginLeft: 5,
  marginBottom: 10
});
