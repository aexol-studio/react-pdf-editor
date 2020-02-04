import React from "react";
import { PartialObjects } from "../../graphql-zeus";
import * as styles from "./styles/Columns";
import { ColumnComponent } from "./ColumnComponent";
import { Colors } from "../styles/Colors";
import { Resizable } from "re-resizable";
import { ColumnsCoponentTxt } from "../../models";
// import { ControlsButton } from "./Controls";
import * as Icons from "react-feather";
import * as styles1 from "./styles/Feature";
import cx from "classnames";
export interface ColumnsComponentProps {
  columns: PartialObjects["Columns"];
  onChange: () => void;
  onDelete: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
  onResize: (index: number, newWidth: number) => void;
  widths: string[];
}

export const ColumnsComponent = ({
  onChange,
  onEdit,
  onDelete,
  onResize,
  columns,
  widths
}: ColumnsComponentProps) => {
  return (
    <>
      {/* <ControlsButton onClick={onDelete}>Delete row</ControlsButton> */}
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <Icons.Trash
          onClick={onDelete}
          className={cx(styles1.MiniIcon, styles1.Delete)}
          size={20}
        />
        {ColumnsCoponentTxt.IconTrashDelete}
      </div>

      <div className={styles.Main}>
        {columns.columns!.map((c, i) => {
          const flexBasis = widths[i]!;
          return (
            <>
              <Resizable
                key={`${i}`}
                enable={{
                  top: false,
                  right: i !== columns.columns!.length - 1,
                  bottom: false,
                  left: i === columns.columns!.length - 1,
                  topRight: false,
                  bottomRight: false,
                  bottomLeft: false,
                  topLeft: false
                }}
                size={{
                  height: "auto",
                  width: flexBasis
                }}
                onResize={(e, direction, ref, d) => {
                  const parentRect = ref.parentElement!.parentElement!.getBoundingClientRect();
                  const parentWidth = Math.abs(
                    parentRect.left - parentRect.right
                  );
                  const rect = ref!.getBoundingClientRect();
                  const rectWidth = Math.abs(rect.left - rect.right);
                  onResize(i, (100.0 * rectWidth) / parentWidth);
                }}
              >
                <div
                  key={`${i}`}
                  style={{
                    borderRight: `solid 1px ${Colors.Ashes}77`
                  }}
                >
                  <ColumnComponent
                    key={i}
                    column={c}
                    onEdit={onEdit}
                    onChange={onChange}
                    onDelete={() => {
                      columns.columns!.splice(i, 1);
                      onChange();
                    }}
                  />
                </div>
              </Resizable>
            </>
          );
        })}
      </div>
    </>
  );
};
