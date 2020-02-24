import { style } from "typestyle";
export const Actions = style({
  $debugName: "TableBlockActions",
  display: "flex",
  flexFlow: "row wrap",
  marginTop: 5
});

export const ControlAddRow = style ({
  $debugName: "ControlAddRow",
  height: 24,
  width: 24,
  cursor: "pointer",
  $nest: {
    "&:hover": {
      fill: '#56DA67',
    }
  }
})
export const ControlAddColumn = style ({
  $debugName: "ControlAddColumn",
  height: 24,
  width: 24,
  cursor: "pointer",
  $nest: {
    "&:hover": {
      fill: '#56DA67',
    }
  }
})
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
