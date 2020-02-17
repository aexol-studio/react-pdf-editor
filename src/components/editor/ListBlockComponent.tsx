import * as React from "react";
import { PartialObjects } from "../../graphql-zeus";
import { FeatureComponent } from "./FeatureComponent";
import { Controls } from "./Controls";
import {
  Rolloutable,
  DeleteAndEditIconsComponentProps
} from "./display/Rolloutable";
import { swapInArray } from "../../utils";
import { translated } from "../../models";
export interface ListBlockComponentProps
  extends DeleteAndEditIconsComponentProps {
  listBlock: PartialObjects["ListBlock"];
  onChange: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
  components?: PartialObjects["TemplateComponent"][];
  // withoutDeleteIcons: boolean
}

const t = translated("ListBlockComponentTxt");

export const ListBlockComponent = (props: ListBlockComponentProps) => {
  const { onChange, onEdit, listBlock
  } = props;
  return (
    <Rolloutable title={t("TitleList")}
    withoutDeleteIcons={false}
    {...props}>
      {listBlock.items &&
        listBlock.items.map((i, index) => {
          return (
            <FeatureComponent
              feature={i}
              onChange={onChange}
              onEdit={onEdit}
              key={`${index}-${i.__typename}`}
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
          );
        })}
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
};
