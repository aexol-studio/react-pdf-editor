import * as React from "react";
import { PartialObjects } from "../../graphql-zeus";
import {
  isTextBlock,
  isImage,
  isStack,
  isListBlock,
  isTableBlock,
  isTimeStamp
} from "../../utils";
import { TextBlockComponent } from "./TextBlockComponent";
import { ImageComponent } from "./ImageComponent";
import { StackComponent } from "./StackComponent";
import { TableBlockComponent } from "./TableBlockComponent";
import { ListBlockComponent } from "./ListBlockComponent";
import * as styles from "./styles/Feature";
import { EmptyFeatureComponent } from "./EmptyFeatureComponent";
import { TimeStampComponent } from "./TimeStampComponent";
import { DeleteAndEditIconsComponent } from "./display/DeleteAndEdit";
export interface BaseFeatureComponentProps {
  onChange: () => void;
}
export interface FeatureComponentProps extends BaseFeatureComponentProps {
  feature: PartialObjects["Feature"];
  onDelete: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
  onMoveDown?: () => void;
  onMoveUp?: () => void;
  [k: string]: unknown;
}

/// tutaj jest komponen wyświetlany itp itp itp

const FeatureComp = (props: FeatureComponentProps) => {
  const { feature, onChange, onEdit, onDelete } = props;
  if (isTimeStamp(feature)) {
    return (
      <div className={styles.FeatureTitleDiv}>
        <div
          style={{
            flex: 10,
            display:"flex",
            alignSelf:"center"
          }}
        >
          <DeleteAndEditIconsComponent {...props} />
        </div>
        <div
          style={{
            flex: 1
          }}
        >
          <TimeStampComponent />
        </div>
      </div>
    );
  }
  if (isTextBlock(feature)) {
    return (
      <TextBlockComponent
        textBlock={feature}
        onChange={onChange}
        onEdit={onEdit}
        onDelete={onDelete}
        {...props}
      />
    );
  }
  if (isImage(feature)) {
    return (
      <ImageComponent
        image={feature}
        onChange={onChange}
        onDelete={onDelete}
        {...props}
      />
    );
  }
  if (isStack(feature)) {
    return (
      <StackComponent
        stack={feature}
        onChange={onChange}
        onEdit={onEdit}
        onDelete={onDelete}
        // onMoveDown={onMoveDown}
        // onMoveUp={onMoveUp}
        // tutaj dodać komponent taki header po kliknięciu onEdit

        {...props}
      />
    );
  }
  // if (isTableBlock(feature)) {
  //   return (
  //     <TableBlockComponent
  //       tableBlock={feature}
  //       onChange={onChange}
  //       onDelete={onDelete}
  //       onEdit={onEdit}
  //       // onMoveDown={onMoveDown}
  //       // onMoveUp={onMoveUp}
  //       // {...props}
  //     />
  //   );
  // }
  if (isTableBlock(feature)) {
    return (
      <div className={styles.FeatureTitleDiv}>
        <div
          style={{
            flex: 1
          }}
        >
          <DeleteAndEditIconsComponent {...props}
          />
        </div>

        <div
          style={{
            flex: 10
          }}
        >
          <TableBlockComponent
            tableBlock={feature}
            onChange={onChange}
            onDelete={onDelete}
            onEdit={onEdit}
            // onMoveDown={onMoveDown}
            // onMoveUp={onMoveUp}
            // {...props}
          />
        </div>
      </div>
    );
  }

  if (isListBlock(feature)) {
    return (
      <ListBlockComponent
        listBlock={feature}
        onDelete={onDelete}
        onChange={onChange}
        onEdit={onEdit}
        {...props}
      />
    );
  }
  return (
    <EmptyFeatureComponent
      feature={feature}
      onChange={onChange}
      onEdit={onEdit}
    />
  );
};
export const FeatureComponent = (props: FeatureComponentProps) => {
  const { onChange, feature, onDelete, onEdit, onMoveDown, onMoveUp } = props;
  return (
    <div className={styles.FeatureMain}>
      <FeatureComp
        onChange={onChange}
        onEdit={onEdit}
        onDelete={onDelete}
        feature={feature}
        onMoveDown={onMoveDown}
        onMoveUp={onMoveUp}
        {...props}
      />
    </div>
  );
};
