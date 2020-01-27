import * as React from "react";
import { PartialObjects } from "../../graphql-zeus";
import { FeatureComponent } from "./FeatureComponent";
import { Controls } from "./Controls";
import { Rolloutable } from "./display/Rolloutable";
import { swapInArray } from "../../utils";
export interface ListBlockComponentProps {
  listBlock: PartialObjects["ListBlock"];
  onChange: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
  components?: PartialObjects["TemplateComponent"][];
}

export const ListBlockComponent = ({
  onChange,
  onEdit,
  listBlock
}: ListBlockComponentProps) => (
  <Rolloutable title="List">
    {listBlock.items &&
      listBlock.items.map((i, index) => (
        <FeatureComponent
          key={`${index}-${i.__typename}`}
          feature={i}
          onChange={onChange}
          onEdit={onEdit}
          onDelete={() => {
            listBlock.items!.splice(index, 1);
            onChange();
          }}
          onMoveDown={
            index !== listBlock.items!.length - 1
              ? () => {
                  swapInArray(listBlock.items!, index, index + 1);
                  onChange();
                }
              : undefined
          }
          onMoveUp={
            index !== 0 && listBlock.items!.length > 1
              ? () => {
                  swapInArray(listBlock.items!, index, index - 1);
                  onChange();
                }
              : undefined
          }
        />
      ))}
    {listBlock.items && (
      <Controls
        parent={listBlock}
        features={listBlock.items}
        mutateWholeObject={onChange}
        clean={() => {
          listBlock.items = [];
          onChange();
        }}
      />
    )}
  </Rolloutable>
);
