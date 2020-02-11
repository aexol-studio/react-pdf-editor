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
import { DeleteAndEditIconsComponent } from "./display/Rolloutable";
export interface BaseFeatureComponentProps {
  onChange: () => void;
}
export interface FeatureComponentProps extends BaseFeatureComponentProps {
  feature: PartialObjects["Feature"];
  onDelete: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
  isRoot?: boolean;
  editedFeature?: PartialObjects["Feature"];
  components?: PartialObjects["TemplateComponent"][];
  onMoveDown?: () => void;
  onMoveUp?: () => void;
}

const FeatureComp = (props: FeatureComponentProps) => {
  const { feature, onChange, onEdit } = props;
  if (isTimeStamp(feature)) {
    return (
      <div>
        <TimeStampComponent />
        <DeleteAndEditIconsComponent {...props} />
      </div>
    );
  }
  if (isTextBlock(feature)) {
    return <TextBlockComponent textBlock={feature} onChange={onChange} />;
  }
  if (isImage(feature)) {
    return <ImageComponent image={feature} onChange={onChange} />;
  }
  if (isStack(feature)) {
    return (
      <StackComponent stack={feature} onChange={onChange} onEdit={onEdit} {...props} />
    );
  }
  if (isTableBlock(feature)) {
    return (
      <TableBlockComponent
        tableBlock={feature}
        onChange={onChange}
        onEdit={onEdit}
      />
    );
  }
  if (isListBlock(feature)) {
    return (
      <ListBlockComponent
        listBlock={feature}
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
  const {
    onChange,
    feature,
    onDelete,
    onEdit,
  } = props
  return (
    <div className={styles.FeatureMain}>
      <FeatureComp
        onChange={onChange}
        onEdit={onEdit}
        onDelete={onDelete}
        feature={feature}
        {...props}
      />
    </div>
  );
};
