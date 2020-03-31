import React from "react";
import { PartialObjects } from "../../graphql-zeus";
import { FeatureComponent } from "./FeatureComponent";
import * as styles from "./styles/Column";
import { Controls } from "./Controls";
// import { FeatureComponentProps } from "livepdf/livecomponents/editor";
// import { DeleteAndEditIconsComponent } from "./display/DeleteAndEdit";
// import { DeleteAndEditIconsComponent } from "./display/DeleteAndEdit";
export interface ColumnComponentProps 
// extends FeatureComponentProps 
{
  column: PartialObjects["Column"];
  onChange: () => void;
  onDelete: () => void;
  // onMoveDown: () => void;
  // onMoveUp: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
}
export const ColumnComponent = ({
  onChange,
  onEdit,
  column,
  onDelete
// onMoveDown,
// onMoveUp

}: 



ColumnComponentProps) => {
  return (
    <div className={styles.ColumnComponentMain}>
      {column.content && Object.keys(column.content).length > 0 ? (
        <>

          <FeatureComponent
            feature={column.content}
            onChange={onChange}
            onEdit={onEdit}
            onDelete={onDelete}
            // onMoveDown={onMoveDown}
            // onMoveUp={onMoveUp}
          />
        </>
      ) : (
        <Controls
          show={true}
          features={
            {
              push: (a: PartialObjects["Feature"]) => {
                column.content = a;
              }
            } as any
          }
          mutateWholeObject={onChange}
          clean={() => {
            column.content = {};
            onChange();
          }}
        />
      )}
    </div>
  );
};
