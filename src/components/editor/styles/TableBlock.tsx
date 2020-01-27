import { style } from "typestyle";
export const Actions = style({
  display: "flex",
  flexFlow: "row wrap"
});

export const ControlColumns = style({
  display: "flex",
  flexFlow: "nowrap"
});
export const ControlCell = style({
  padding: 10,
  $nest: {
    input: {
      width: "100%"
    }
  }
});
