import * as React from "react";
import classnames from "classnames";
import { CheckBox } from "@components/icons"
import * as styles from "@styles/CheckboxStyles";

export interface ICheckBoxProps {
  value?: boolean;
  checkboxParagraph?: string | JSX.Element;
  onChange?: (value: boolean) => void;
  style?: React.CSSProperties;
}

interface ICheckboxState {
  value: boolean;
}

export class Checkbox extends React.PureComponent<
  ICheckBoxProps,
  ICheckboxState
> {
  constructor(props: ICheckBoxProps) {
    super(props);
    this.state = {
      value: props.value || false
    };
  }
  handleOnClick = (value: boolean) => {
    if (this.state.value !== value) {
      this.setState({
        value: value
      });
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  };
  renderElements = () => {
    const { style } = this.props;
    return (
      <React.Fragment>
        <div
          style={style}
          className={classnames(
            classnames({
              [styles.CheckboxElement]: true,
              active: this.state.value,
              on: true
            }),
          )}
          onClick={e => this.handleOnClick(!this.state.value)}
        >
          <CheckBox fill={"Super Nova"} />
        </div>
        <p style={style} className={styles.CheckboxParagraph}>
          {this.props.checkboxParagraph}
        </p>
      </React.Fragment>
    );
  };
  render() {
    return <div className={styles.Checkbox}>{this.renderElements()}</div>;
  }
}
