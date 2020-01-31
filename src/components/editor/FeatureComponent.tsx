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
import * as Icons from "react-feather";
import cx from "classnames";
import { EmptyFeatureComponent } from "./EmptyFeatureComponent";
import { TimeStampComponent } from "./TimeStampComponent";
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

const FeatureComp = ({
  onChange,
  onEdit,
  feature,
  components
}: FeatureComponentProps) => {
  if (isTimeStamp(feature)) {
    return <TimeStampComponent />;
  }
  if (isTextBlock(feature)) {
    return <TextBlockComponent textBlock={feature} onChange={onChange} />;
  }
  if (isImage(feature)) {
    return <ImageComponent image={feature} onChange={onChange} />;
  }
  if (isStack(feature)) {
    return (
      <StackComponent stack={feature} onChange={onChange} onEdit={onEdit} />
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
export const FeatureComponent = ({
  onChange,
  feature,
  onDelete,
  isRoot,
  components,
  onEdit,
  onMoveDown,
  onMoveUp
}: FeatureComponentProps) => {
  return (
    <div className={styles.Main}>
      <FeatureComp
        onChange={onChange}
        onEdit={onEdit}
        onDelete={onDelete}
        feature={feature}
      />
      <div className={styles.FeatureOptions}>
        {onMoveDown && (
          <div
            className={cx(styles.MiniIcon, styles.Edit)}
            onClick={() => onMoveDown()}
          >
            <Icons.ArrowDown size={15} />
          </div>
        )}
        {onMoveUp && (
          <div
            className={cx(styles.MiniIcon, styles.Edit)}
            onClick={() => onMoveUp()}
          >
            <Icons.ArrowUp size={10} />
          </div>
        )}
        {!isRoot && (
          <div
            className={cx(styles.MiniIcon, styles.Delete)}
            onClick={onDelete}
          >
            <Icons.Trash size={10} />
          </div>
        )}
        <div
          className={cx(styles.MiniIcon, styles.Edit)}
          onClick={() => onEdit(feature)}
        >
          <Icons.Edit size={10} />
        </div>
      </div>
    </div>
  );
};
