import * as React from "react";
import { PartialObjects } from "../../graphql-zeus";
import { Controls } from "./Controls";
export interface EmptyFeatureComponentProps {
  feature: PartialObjects["Feature"];
  onChange: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
}

export const EmptyFeatureComponent = ({
  onChange,
  onEdit,
  feature
}: EmptyFeatureComponentProps) => (
  <Controls
    features={
      {
        push: (o: PartialObjects["Feature"]) => {
          feature = o;
        }
      } as any
    }
    mutateWholeObject={onChange}
    clean={() => {
      feature = {};
      onChange();
    }}
  />
);
