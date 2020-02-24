import * as React from "react";
import * as styles from "./styles/Rolloutable";
import * as icons from "react-feather";
import { PartialObjects } from "../../../graphql-zeus";
import { DeleteAndEditIconsComponentProps, DeleteAndEditIconsComponent } from "./DeleteAndEdit";

// export interface DeleteAndEditIconsComponentProps {
//   feature?: PartialObjects["Feature"];
//   onDelete?: () => void;
//   onEdit?: (feature: PartialObjects["Feature"]) => void;
//   isRoot?: boolean;
//   onMoveDown?: () => void;
//   onMoveUp?: () => void;
//   withoutDeleteIcons?: boolean;
// }

// export const DeleteAndEditIconsComponent = ({
//   feature,
//   onDelete,
//   isRoot,
//   onEdit,
//   onMoveDown,
//   onMoveUp
// }: DeleteAndEditIconsComponentProps) => (
//   <div className={styles1.FeatureOptions}>
//     {onMoveDown && (
//       <div
//         className={cx(styles1.MiniIcon, styles1.Edit)}
//         onClick={() => onMoveDown()}
//       >
//         <Icons.ArrowDown
//           style={{
//             marginLeft: 15
//           }}
//           size={15}
//         />
//       </div>
//     )}
//     {onMoveUp && (
//       <div
//         className={cx(styles1.MiniIcon, styles1.Edit)}
//         onClick={() => onMoveUp()}
//       >
//         <Icons.ArrowUp
//           style={{
//             marginLeft: 15
//           }}
//           size={15}
//         />
//       </div>
//     )}
//     {!isRoot && (
//       <div className={cx(styles1.MiniIcon, styles1.Delete)} onClick={onDelete}>
//         <Icons.Trash
//           style={{
//             marginLeft: 15
//           }}
//           size={15}
//         />
//       </div>
//     )}
//     <div>
//       <Icons.Edit
//         style={{
//           marginLeft: 10
//         }}
//         className={cx(styles1.MiniIcon, styles1.Edit)}
//         onClick={() => onEdit && feature && onEdit(feature)}
//         size={15}
//       />
//     </div>
//   </div>
// );

export interface RolloutableComponentProps
  extends DeleteAndEditIconsComponentProps {
  children: React.ReactNode;
  title: string;
  feature?: PartialObjects["Feature"];
  onEdit?: (feature: PartialObjects["Feature"]) => void;
}
interface RolloutableState {
  rolledOut: boolean;
}

export class Rolloutable extends React.Component<
  RolloutableComponentProps,
  RolloutableState
> {
  state: RolloutableState = {
    rolledOut: true
  };
  render() {
    return (
      <div className={styles.RolloutableMain}>
        <div className={styles.Title}>
          {this.state.rolledOut ? (
            <icons.MinusSquare
              size={10}
              onClick={() => {
                this.setState({ rolledOut: !this.state.rolledOut });
              }}
            />
          ) : (
            <icons.PlusSquare
              size={10}
              onClick={() => {
                this.setState({ rolledOut: !this.state.rolledOut });
                console.log("beng!")
              }}
            />
          )}
          <span style={{ marginRight: 5 }} />
          <p
            onClick={() => {
              this.setState({ rolledOut: !this.state.rolledOut });
            }}
          >
            {this.props.title}
          </p>
          {!this.props.withoutDeleteIcons && (
            <DeleteAndEditIconsComponent {...this.props} />
          )}
        </div>
        <div
          className={styles.RolloutableChildren}
          style={{ display: this.state.rolledOut ? "block" : "none" }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
