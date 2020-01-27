import React from "react";
import {
  PDFViewer,
} from "@react-pdf/renderer";
import * as stylesMain from "./styles";
import { PDFDocument } from "./PDFDocument";
import { FrontendTypes } from "../frontend-types";
export interface LivePDFProps {
  machine: FrontendTypes["MachineTemplate"]
}
let LOADING = true;

export class LivePDF extends React.Component<LivePDFProps> {
  shouldComponentUpdate() {
    return !LOADING;
  }
  componentDidMount() {
    setTimeout(() => {
      LOADING = false;
      this.forceUpdate();
    }, 2000);
  }
  componentDidUpdate() {
    if (
      this.props.machine &&
      this.props.machine.template &&
      this.props.machine.template.documents &&
      this.props.machine.template.documents.length > 0 &&
      !LOADING
    ) {
      LOADING = true;
      setTimeout(() => {
        LOADING = false;
        this.forceUpdate();
      }, 5000);
    }
  }
  render() {
    const { props } = this;
    const pages =
      (props.machine.template && props.machine.template.documents) || [];
    return (
      <>
        {pages.length > 0 && (
          <PDFViewer className={stylesMain.PDFViewerStyle}>
            <PDFDocument
              machine={props.machine}
              onRender={() => {
                LOADING = false;
              }}
            />
          </PDFViewer>
        )}
      </>
    );
  }
}
