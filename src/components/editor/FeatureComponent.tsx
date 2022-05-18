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

{
}

/// tutaj jest komponen wyświetlany itp itp itp

const FeatureComp = (props: FeatureComponentProps) => {
  const { feature, onChange, onEdit, onDelete, onMoveDown, onMoveUp } = props;
  if (isTimeStamp(feature)) {
    return (
      <div className={styles.FeatureTitleDiv}>
        <TimeStampComponent />
        <DeleteAndEditIconsComponent {...props} />
      </div>
    );
  }
  if (isTextBlock(feature)) {
    return (
      <TextBlockComponent
        textBlock={feature}
        {...props}
        onChange={onChange}
        onDelete={onDelete}
      />
    );
  }
  if (isImage(feature)) {
    return (
      <ImageComponent
        image={feature}
        {...props}
        onChange={onChange}
        onDelete={onDelete}
      />
    );
  }
  if (isStack(feature)) {
    return (
      <StackComponent
        {...props}
        stack={feature}
        onChange={onChange}
        onDelete={onDelete}
        onMoveDown={onMoveDown}
        onMoveUp={onMoveUp}
      // tutaj dodać komponent taki header po kliknięciu onEdit
      />
    );
  }
  if (isTableBlock(feature)) {
    return (
      <TableBlockComponent
        tableBlock={feature}
        {...props}
        onChange={onChange}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  }
  if (isListBlock(feature)) {
    return (
      <ListBlockComponent
        listBlock={feature}
        {...props}
        onDelete={onDelete}
        onChange={onChange}
        onEdit={onEdit}
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
        onMoveDown={onMoveDown}
        onMoveUp={onMoveUp}
        {...props}
        onChange={onChange}
        onEdit={onEdit}
        onDelete={onDelete}
        feature={feature}
      />
    </div>
  );
};
