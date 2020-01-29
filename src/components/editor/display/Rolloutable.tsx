import * as React from "react";
import * as styles from "./styles/Rolloutable";

import * as icons from "react-feather";
export interface RolloutableComponentProps {
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
      <div className={styles.Main}>
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
