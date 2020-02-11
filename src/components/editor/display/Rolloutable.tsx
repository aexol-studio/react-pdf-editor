import * as React from "react";
import * as styles from "./styles/Rolloutable";
import * as icons from "react-feather";
import { PartialObjects } from "../../../graphql-zeus";
import * as Icons from "react-feather";
import cx from "classnames";
import * as styles1 from "..//styles/Feature";

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
        <Icons.ArrowDown size={15} />
      </div>
    )}
    {onMoveUp && (
      <div
        className={cx(styles1.MiniIcon, styles1.Edit)}
        onClick={() => onMoveUp()}
      >
        <Icons.ArrowUp size={10} />
      </div>
    )}
    {!isRoot && (
      <div className={cx(styles1.MiniIcon, styles1.Delete)} onClick={onDelete}>
        <Icons.Trash size={20} />
      </div>
    )}
    <div
      className={cx(styles1.MiniIcon, styles1.Edit)}
      onClick={() => onEdit && feature && onEdit(feature)}
    >
      <Icons.Edit size={20} />
    </div>
  </div>
);

export interface RolloutableComponentProps
  extends DeleteAndEditIconsComponentProps {
  children: React.ReactNode;
  title: string;
}
interface RolloutableState {
  rolledOut: boolean;
}

export class Rolloutable extends React.Component<
  RolloutableComponentProps,
  RolloutableState
> {
  state: RolloutableState = {
    rolledOut: false
  };
  render() {
    return (
      <div className={styles.RolloutableMain}>
        <div
          onClick={() => {
            this.setState({ rolledOut: !this.state.rolledOut });
          }}
          className={styles.Title}
        >
          {this.state.rolledOut ? (
            <icons.MinusSquare size={10} />
          ) : (
            <icons.PlusSquare size={10} />
          )}
          <span style={{ marginRight: 5 }} />
          {this.props.title}
          {!this.props.withoutDeleteIcons && (
            <DeleteAndEditIconsComponent {...this.props} />
          )}
        </div>
        <div
          className={styles.Children}
          style={{ display: this.state.rolledOut ? "block" : "none" }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
