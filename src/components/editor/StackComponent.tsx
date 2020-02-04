import * as React from "react";
import { PartialObjects } from "../../graphql-zeus";
import { FeatureComponent } from "./FeatureComponent";
import { Controls } from "./Controls";
import { Rolloutable } from "./display/Rolloutable";
import { swapInArray } from "../../utils";
import { StackComponentTxt } from "../../models";
export interface StackComponentProps {
  stack: PartialObjects["Stack"];
  onChange: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
  components?: PartialObjects["TemplateComponent"][];
}

export const StackComponent = ({
  onChange,
  onEdit,
  stack
}: StackComponentProps) => {
  return (
    <Rolloutable title={StackComponentTxt.TitleStack}>
      {stack.items &&
        stack.items.map((i, index) => {
          return (
            <FeatureComponent
              feature={i}
              onEdit={onEdit}
              onChange={onChange}
              key={index}
              onDelete={() => {
                stack.items!.splice(index, 1);
                onChange();
              }}
              onMoveDown={
                index !== stack.items!.length - 1
                  ? () => {
                      swapInArray(stack.items!, index, index + 1);
                      onChange();
                    }
                  : undefined
              }
              onMoveUp={
                index !== 0 && stack.items!.length > 1
                  ? () => {
                      swapInArray(stack.items!, index, index - 1);
                      onChange();
                    }
                  : undefined
              }
            />
          );
        })}
      {stack.items && (
        <Controls
          features={stack.items}
          mutateWholeObject={onChange}
          clean={() => {
            stack.items = [];
            onChange();
          }}
        />
      )}
    </Rolloutable>
  );
};
