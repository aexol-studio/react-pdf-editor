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
  isRoot?: boolean;
  editedFeature?: PartialObjects["Feature"];
  components?: PartialObjects["TemplateComponent"][];
  onMoveDown?: () => void;
  onMoveUp?: () => void;
}

const FeatureComp = (props: FeatureComponentProps) => {
  const { feature, onChange, onEdit, onDelete, onMoveDown, onMoveUp } = props;
  if (isTimeStamp(feature)) {
    return (
      <div
      style={{
        display: 'flex'
      }}

      >
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
    // isRoot,
    // components,
    onEdit,
    onMoveDown,
    onMoveUp
  } = props;
  return (
    <div className={styles.FeatureMain}>
      <FeatureComp
        onChange={onChange}
        onEdit={onEdit}
        onDelete={onDelete}
        feature={feature}
        onMoveDown={onMoveDown}
        onMoveUp={onMoveUp}
        // {...!isRoot && (
        //   <div
        //     className={cx(styles.MiniIcon, styles.Delete)}
        //     onClick={onDelete}
        //   >
        //     <Icons.Trash size={10} />
        //   </div>
        // )}
        {...props}
      />
    </div>
  );
};
