import * as React from "react";
import { PartialObjects, Components } from "../graphql-zeus";
import { DocumentComponent, FeatureComponent } from "../components/editor";
import { TopMenu, IconButton } from "../components";
import * as styles from "./styles/ReactPDFEditor";
import { LivePDF } from "../livepdf";
import { FrontendTypes } from "../frontend-types";
import { translated } from "../models";
import * as Icons from "react-feather";
export interface PDFProps {}
export interface PDFState {
  PDF: FrontendTypes["MachineTemplate"];
  editedFeature?: PartialObjects["Feature"];
  components?: FrontendTypes["TemplateComponent"][];
  errors?: string[];
  showPDF: boolean;
}

const t = translated("ReactPDFEditorTxt");

export class ReactPDFEditor extends React.Component<PDFProps, PDFState> {
  state: PDFState = {
    PDF: {
      name: "untitled",
      template: {
        footer: {
          __typename: "Stack",
          styleJson: JSON.stringify({
            marginTop: 0,
            marginRight: 37,
            marginLeft: 37,
            marginBottom: 30
          }),
          items: []
        },
        header: {
          __typename: "Stack",
          items: []
        },
        margin: [10, 80, 10, 40],
        documents: [
          {
            features: {
              items: []
            }
          }
        ]
      }
    },
    showPDF: true
  };
  updatePDF = (
    fn: (
      PDF: FrontendTypes["MachineTemplate"]
    ) => FrontendTypes["MachineTemplate"]
  ) => {
    this.setState({
      PDF: fn(this.state.PDF)
    });
  };
  updatePDFTemplate = (
    fn: (
      template: FrontendTypes["MachineDocument"]
    ) => FrontendTypes["MachineDocument"]
  ) => {
    this.updatePDF(PDF => ({
      ...PDF,
      template: fn(PDF.template || {})
    }));
  };
  updatePDFTemplateFooter = (footer: PartialObjects["Feature"]) => {
    this.updatePDFTemplate(template => ({
      ...template,
      footer
    }));
  };
  updatePDFTemplateHeader = (header: PartialObjects["Feature"]) => {
    this.updatePDFTemplate(template => ({
      ...template,
      header
    }));
  };
  updatePDFTemplateDocuments = (
    fn: (documents: FrontendTypes["Document"][]) => FrontendTypes["Document"][]
  ) => {
    this.updatePDFTemplate(template => ({
      ...template,
      documents: fn(template.documents || [])
    }));
  };
  addPage = () => {
    this.updatePDFTemplateDocuments(documents => [
      ...documents,
      {
        features: {
          items: []
        }
      }
    ]);
  };
  mutateWholeObject = () => {
    const currentPDFObject: FrontendTypes["MachineTemplate"] = {
      ...this.state.PDF
    };
    this.setState({
      PDF: currentPDFObject
    });
    this.forceUpdate();
  };
  render() {
    const { PDF } = this.state;
    if (!PDF) {
      return <div>{t("Loading")}}</div>;
    }
    const { template } = PDF;
    if (!template) {
      return <div>{t("Loading")}</div>;
    }
    const {
      documents = [{ features: { items: [] } }],
      footer,
      header
    } = template;
    // console.log(documents);
    return (
      <>
        <TopMenu
          editedFeature= {this.state.editedFeature}
          onChange={() => this.mutateWholeObject()}
        />
        <div className={styles.EyePlacement}>
          <IconButton
            onClick={() => this.setState({ showPDF: !this.state.showPDF })}
          >
            {this.state.showPDF ? (
              <>
                <span>{t("HidePreview")}</span>
                <Icons.EyeOff size={20} />
              </>
            ) : (
              <>
                <span>{t("ShowPreview")}</span>
                <Icons.Eye size={20} />
              </>
            )}
          </IconButton>
        </div>
        <div className={styles.SplitScreen}>
          <div className={styles.Left}>
            <h4 className={styles.SectionTitle}>{t("SectionTitleHeader")}</h4>
            <FeatureComponent
              components={
                this.state.components &&
                this.state.components.filter(c => c.type === Components.HEADER)
              }
              feature={header!}
              onChange={() => this.mutateWholeObject()}
              onDelete={() => {}}
              onEdit={editedFeature => this.setState({ editedFeature })}
              isRoot={true}
            />
            <h4 className={styles.SectionTitle}>{t("SectionTitlePages")}</h4>
            {documents.map((d, i) => (
              <DocumentComponent
                i={i}
                components={
                  this.state.components &&
                  this.state.components.filter(
                    c => c.type === Components.DOCUMENT
                  )
                }
                key={`${i}`}
                doc={d}
                onEdit={editedFeature => this.setState({ editedFeature })}
                onChange={() => this.mutateWholeObject()}
                onDelete={() => {
                  template.documents! = template!.documents!.filter(
                    (doc, ind) => doc !== d
                  );
                  this.mutateWholeObject();
                }}
              />
            ))}

            {/* <ButtonSimple onClick={() => this.addPage()}>
              {t("ButtonAddPage")}
            </ButtonSimple> */}

            <Icons.PlusSquare onClick={() => this.addPage()} />

            <h4 className={styles.SectionTitle}>{t("SectionTitleFooter")}</h4>
            <FeatureComponent
              components={
                this.state.components &&
                this.state.components.filter(c => c.type === Components.FOOTER)
              }
              feature={footer!}
              onChange={() => this.mutateWholeObject()}
              onDelete={() => {}}
              onEdit={editedFeature => this.setState({ editedFeature })}
              isRoot={true}
            />
          </div>
          {this.state.showPDF && (
            <div className={styles.Right}>
              <LivePDF machine={PDF} />
            </div>
          )}
        </div>
      </>
    );
  }
}
