import * as React from "react";
import { PartialObjects } from "../../graphql-zeus";
import { Editor } from "..";
import { Rolloutable } from "./display/Rolloutable";
import { Confirm } from "../Confirm";
export const DocumentComponent = ({
  i,
  doc,
  components,
  onEdit,
  onChange,
  onDelete
}: {
  i: number;
  doc: PartialObjects["Document"];
  onChange: () => void;
  onDelete: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
  components?: PartialObjects["TemplateComponent"][];
}) => {
  return (
    <Rolloutable key={`Page${i}`} title={`Page ${i}`}>
      <div style={{ display: "flex", padding: 5 }}>
        <Confirm onConfirm={onDelete}>Delete page</Confirm>
      </div>
      {doc.features!.items!.map((item, index) => (
        <Editor.FeatureComponent
          key={`${index}`}
          feature={item}
          components={components}
          onEdit={onEdit}
          onChange={onChange}
          onDelete={() => {
            doc.features!.items!.splice(index, 1);
            onChange();
          }}
        />
      ))}
      <Editor.Controls
        features={doc.features!.items!}
        mutateWholeObject={onChange}
        document
        clean={() => {
          doc.features!.items = [];
          onChange();
        }}
      />
    </Rolloutable>
  );
};
