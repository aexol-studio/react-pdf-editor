import React from "react";
import { PartialObjects } from "@/graphql-zeus";
import { FeatureComponent } from "./FeatureComponent";
import * as styles from "./styles/Column";
import { Controls } from "./Controls";
export interface ColumnComponentProps {
  column: PartialObjects["Column"];
  onChange: () => void;
  onDelete: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
}
export const ColumnComponent = ({
  onChange,
  onEdit,
  column,
  onDelete
}: ColumnComponentProps) => {
  return (
    <div className={styles.Main}>
      {column.content && Object.keys(column.content).length > 0 ? (
        <FeatureComponent
          feature={column.content}
          onChange={onChange}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ) : (
        <Controls
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
