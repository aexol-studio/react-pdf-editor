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
// import * as Icons from "react-feather";
import { TextBlockComponent } from "./TextBlockComponent";
import { ImageComponent } from "./ImageComponent";
import { StackComponent } from "./StackComponent";
import { TableBlockComponent } from "./TableBlockComponent";
import { ListBlockComponent } from "./ListBlockComponent";
import * as styles from "./styles/Feature";
import { EmptyFeatureComponent } from "./EmptyFeatureComponent";
import { TimeStampComponent } from "./TimeStampComponent";
// import cx from "classnames";
import { DeleteAndEditIconsComponent } from "./display/Rolloutable";
export interface BaseFeatureComponentProps {
  onChange: () => void;
}
export interface FeatureComponentProps extends BaseFeatureComponentProps {
  feature: PartialObjects["Feature"];
  onDelete: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
  editedFeature?: PartialObjects["Feature"];
  onMoveDown?: () => void;
  onMoveUp?: () => void;
}

/// tutaj jest komponen wyświetlany itp itp itp

const FeatureComp = (props: FeatureComponentProps) => {
  const { feature, onChange, onEdit, onDelete, onMoveDown, onMoveUp } = props;
  if (isTimeStamp(feature)) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <TimeStampComponent />
        <DeleteAndEditIconsComponent {...props} />
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

        // ni dzia ła
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

        //nie działą
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
        onMoveDown={onMoveDown}
        onMoveUp={onMoveUp}
        {...props}
      />
    );
  }
  if (isTableBlock(feature)) {
    return (
      <TableBlockComponent
        tableBlock={feature}
        onChange={onChange}
        onDelete={onDelete}
        onEdit={onEdit}
        {...props}
      />
    );
  }
  if (isListBlock(feature)) {
    return (
      <ListBlockComponent
        listBlock={feature}
        onDelete={onDelete}
        onChange={onChange}
        onEdit={onEdit}
        // {...props}
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
