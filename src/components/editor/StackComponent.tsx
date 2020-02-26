import * as React from "react";
import { PartialObjects } from "../../graphql-zeus";
import { FeatureComponent } from "./FeatureComponent";
import { Controls } from "./Controls";
import { Rolloutable } from "./display/Rolloutable";
import { DeleteAndEditIconsComponentProps } from "./display/DeleteAndEdit";
import { swapInArray } from "../../utils";
import { translated } from "../../models";
export interface StackComponentProps extends DeleteAndEditIconsComponentProps {
  stack: PartialObjects["Stack"];
  onChange: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
  components?: PartialObjects["TemplateComponent"][];
  hideControls?: boolean;
  topMenuControls?: boolean;
}

const t = translated("StackComponentTxt");

export const StackComponent = (props: StackComponentProps) => {
  const { onChange, onEdit, stack, hideControls } = props;
  return (
    <Rolloutable title={t("TitleStack")} {...props}>
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
          //

          //showTopMenu={topMenuControls}

          show={!hideControls}
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
