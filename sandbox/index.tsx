import React from "react";
import ReactDOM from "react-dom";
import { style } from "typestyle";
import { ReactPDFEditor } from "../src";

export const AppContainer = style({
  $debugName: "AppContainer",
  height: "100vh",
  width: "100%",
  margin: 0
});

const App: React.FC = () => {
  return (
    <div className={AppContainer}>
      <ReactPDFEditor />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
