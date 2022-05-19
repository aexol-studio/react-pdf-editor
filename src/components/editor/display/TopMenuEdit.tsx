import * as React from "react";
import { PartialObjects } from "@/graphql-zeus";
import * as Icons from "react-feather";
import cx from "classnames";
import * as styles1 from "@components/editor/styles/Feature";

export interface DeleteAndEditIconsComponentProps {
  feature?: PartialObjects["Feature"];
  onDelete?: () => void;
  onEdit?: (feature: PartialObjects["Feature"]) => void;
  isRoot?: boolean;
  onMoveDown?: () => void;
  onMoveUp?: () => void;
  withoutDeleteIcons?: boolean;
}

export const DeleteAndEditIconsComponent = ({
  feature,
  onDelete,
  isRoot,
  onEdit,
  onMoveDown,
  onMoveUp
}: DeleteAndEditIconsComponentProps) => (
  <div className={styles1.FeatureOptions}>
    {onMoveDown && (
      <div
        className={cx(styles1.MiniIcon, styles1.Edit)}
        onClick={() => onMoveDown()}
      >
        <Icons.ArrowDown
          style={{
            marginLeft: 15
          }}
          size={15}
        />
      </div>
    )}
    {onMoveUp && (
      <div
        className={cx(styles1.MiniIcon, styles1.Edit)}
        onClick={() => onMoveUp()}
      >
        <Icons.ArrowUp
          style={{
            marginLeft: 15
          }}
          size={15}
        />
      </div>
    )}
    {!isRoot && (
      <div className={cx(styles1.MiniIcon, styles1.Delete)} onClick={onDelete}>
        <Icons.Trash
          style={{
            marginLeft: 15
          }}
          size={15}
        />
      </div>
    )}
    <div>
      <Icons.Edit
        style={{
          marginLeft: 10
        }}
        className={cx(styles1.MiniIcon, styles1.Edit)}
        onClick={() => onEdit && feature && onEdit(feature)}
        size={15}
      />
    </div>
  </div>
);

