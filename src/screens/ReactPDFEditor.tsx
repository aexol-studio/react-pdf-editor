import React, { useState } from "react";
import { PartialObjects } from "@/graphql-zeus";
import { DocumentComponent, FeatureComponent } from "@components/editor";
import { IconButton } from "@components/atoms";
import * as styles from "./styles/ReactPDFEditor";
import { LivePDF } from "@/livepdf";
import { FrontendTypes } from "@/frontend-types";
import { translated } from "@/models";
import * as Icons from "react-feather";
export interface PDFProps {
  onChange?: (onChange: FrontendTypes["MachineTemplate"]) => void;
  initialPDF?: FrontendTypes["MachineTemplate"];
}


export interface PDFState {
  PDF: FrontendTypes["MachineTemplate"];
  editedFeature?: PartialObjects["Feature"];
  errors?: string[];
  showPDF: boolean;
}

const t = translated("ReactPDFEditorTxt");

export const ReactPDFEditor: React.FunctionComponent<PDFProps> = ({
  initialPDF,
  onChange
}) => {


  const [state, setState] = useState<PDFState>(
    {
      PDF: initialPDF || {
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
    }
  );

  onChange = () => {
    const currentPDFObject: FrontendTypes["MachineTemplate"] = {
      ...state.PDF
    };
    setState(s => ({
      ...s,
      PDF: currentPDFObject
    }));
  };

  const updatePDF = (
    fn: (
      PDF: FrontendTypes["MachineTemplate"]
    ) => FrontendTypes["MachineTemplate"]
  ) => {
    setState(s => ({
      ...s,
      PDF: fn(state.PDF)
    }));
  };
  const updatePDFTemplate = (
    fn: (
      template: FrontendTypes["MachineDocument"]
    ) => FrontendTypes["MachineDocument"]
  ) => {
    updatePDF(PDF => ({
      ...PDF,
      template: fn(PDF.template || {})
    }));
  };
  const updatePDFTemplateDocuments = (
    fn: (documents: FrontendTypes["Document"][]) => FrontendTypes["Document"][]
  ) => {
    updatePDFTemplate(template => ({
      ...template,
      documents: fn(template.documents || [])
    }));
  };
  const addPage = () => {
    updatePDFTemplateDocuments(documents => [
      ...documents,
      {
        features: {
          items: []
        }
      }
    ]);
  };
  const mutateWholeObject = () => {
    const currentPDFObject: FrontendTypes["MachineTemplate"] = {
      ...state.PDF
    };
    setState(s => ({
      ...s,
      PDF: currentPDFObject
    }));
    // forceUpdate();
  };
  const { PDF } = state;
  if (!PDF) {
    return <div>{t("Loading")}</div>;
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
  return (
    <>
      <div className={styles.EyePlacement}>
        <IconButton
          onClick={() => setState(s => ({ ...s, showPDF: !state.showPDF }))}
        >
          {state.showPDF ? (
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
          <FeatureComponent
            feature={header!}
            onChange={() => mutateWholeObject()}
            onDelete={() => { }}
            onEdit={editedFeature => setState(s => ({ ...s, editedFeature }))}
            hideControls={true}
          />
          <h4 className={styles.SectionTitle}>{t("SectionTitlePages")}</h4>
          {documents.map((d, i) => (
            <DocumentComponent
              i={i}
              key={`${i}`}
              doc={d}
              onEdit={editedFeature => setState(s => ({ ...s, editedFeature }))}
              onChange={() => mutateWholeObject()}
              onDelete={() => {
                template.documents! = template!.documents!.filter(
                  (doc, ind) => doc !== d
                );
                mutateWholeObject();
              }}
            />
          ))}
          <Icons.PlusSquare size={15} onClick={() => addPage()} />

          <h4 className={styles.SectionTitle}>{t("SectionTitleFooter")}</h4>
          <FeatureComponent
            feature={footer!}
            onChange={() => mutateWholeObject()}
            onDelete={() => { }}
            onEdit={editedFeature => setState(s => ({ ...s, editedFeature }))}
            hideControls={true}
          />
        </div>
        {state.showPDF && (
          <div className={styles.Right}>
            <LivePDF machine={PDF} />
          </div>
        )}
      </div>
    </>
  );
};
