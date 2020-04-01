import * as React from "react";
import * as styles from "./styles/Rolloutable";
import * as icons from "react-feather";
import { PartialObjects } from "../../../graphql-zeus";
import {
  DeleteAndEditIconsComponentProps,
  DeleteAndEditIconsComponent
} from "./DeleteAndEdit";

export interface RolloutableComponentProps
  extends DeleteAndEditIconsComponentProps {
  children: React.ReactNode;
  title: string;
  feature?: PartialObjects["Feature"];
  onEdit?: (feature: PartialObjects["Feature"]) => void;
  style?: React.CSSProperties;
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
                // console.log("beng!");
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
