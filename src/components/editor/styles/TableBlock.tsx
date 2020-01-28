import { style } from "typestyle";
export const Actions = style({
  $debugName: "TableBlockActions",
  display: "flex",
  flexFlow: "row wrap"
});

export const ControlColumns = style({
  $debugName: "TableBlockControlColums",
  display: "flex",
  flexFlow: "nowrap"
});
export const ControlCell = style({
  $debugName: "TableBlockControlCell",
  padding: 10,
  $nest: {
    input: {
      width: "100%"
    }
  }
});
