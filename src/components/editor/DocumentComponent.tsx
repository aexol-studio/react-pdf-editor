import * as React from "react";
import { PartialObjects } from "@/graphql-zeus";
import { Editor } from "..";
import { Rolloutable } from "./display/Rolloutable";
import { Confirm } from "@components/molecules/Confirm";
import * as Icons from "react-feather";
import * as styles from "./styles/Feature";
import cx from "classnames";

export const DocumentComponent = ({
  i,
  doc,
  onEdit,
  onChange,
  onDelete
}: {
  i: number;
  doc: PartialObjects["Document"];
  onChange: () => void;
  onDelete: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
}) => {
  return (
    <Rolloutable
      withoutDeleteIcons={true}
      key={`Page${i + 1}`}
      title={`Page ${i + 1}`}
    >
      {/* <div style={{ display: "flex", marginTop: 5, marginBottom: 10 }}> */}
      <div className={styles.Basket}>
        <Confirm onConfirm={onDelete}>
          <Icons.Trash
            size={15}
            className={cx(styles.MiniIcon, styles.Delete)}
          />
        </Confirm>
      </div>
      {doc.features!.items!.map((item, index) => (
        <Editor.FeatureComponent
          key={`${index}`}
          feature={item}
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
