import React, { useState } from "react";
import * as styles from "./styles/Controls";
import { BuiltInStyles, PartialObjects } from "../../graphql-zeus";
import { PlusCircle, MinusCircle } from "react-feather";
import { translated } from "../../models";
export interface ControlsProps {
  features: PartialObjects["Feature"][];
  mutateWholeObject: () => void;
  clean: () => void;
  document?: boolean;
  parent?: PartialObjects["Feature"];
  show?: boolean;
}

const t = translated("ControlsComponentTxt");

export const ControlsButton = ({
  onClick,
  children
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.Button} onClick={onClick}>
      {children}
    </div>
  );
};
export const Controls = ({
  features,
  mutateWholeObject,
  document,
  parent,
  show
}: ControlsProps) => {
  // const [open, setOpen] = useState(false);

  const [open, setOpen] = useState(!!show);

  //pierwotny stan jest na false

  return (
    <div className={styles.Main}>
      <div
        className={styles.PlusMinus}
        onClick={() => {
          if (parent && parent.__typename === "ListBlock") {
            features.push({
              text: "",
              __typename: "TextBlock"
            } as PartialObjects["TextBlock"]);
            mutateWholeObject();
            return;
          }
          setOpen(!open);
          console.log("beng 1");

          //zmiana stanu na true i pokazują się kontrolki
        }}
      >
        {open ? <MinusCircle size={15} /> : <PlusCircle size={15} />}

        {/* jeśli open jest true to minus a jesli nie to plus */}
      </div>
      {open && (
        <>
          <div className={styles.Overlay} onClick={() => setOpen(false)}>
            <div className={styles.Menu}>
              <div className={styles.Category}>
                {document && (
                  <ControlsButton
                    onClick={() => {
                      features.push({
                        __typename: "Stack",
                        items: []
                      } as PartialObjects["Stack"]);
                      setOpen(false);
                      mutateWholeObject();
                      console.log("beng 2");
                    }}
                  >
                    <p
                      style={{
                        fontSize: "12px",
                        margin: 0
                      }}
                    >
                      {t("ButtonStack")}
                    </p>
                  </ControlsButton>
                )}
                {!document && (
                  <>
                    <ControlsButton
                      onClick={() => {
                        features.push({
                          text: "",
                          __typename: "TextBlock"
                        } as PartialObjects["TextBlock"]);
                        setOpen(false);
                        mutateWholeObject();
                      }}
                    >
                      {/* {ControlsComponentTxt.ButtonText} */}
                      {t("ButtonText")}
                    </ControlsButton>
                    <ControlsButton
                      onClick={() => {
                        features.push({
                          __typename: "Image"
                        } as PartialObjects["Image"]);
                        setOpen(false);
                        mutateWholeObject();
                      }}
                    >
                      {t("ButtonImage")}
                    </ControlsButton>
                    <ControlsButton
                      onClick={() => {
                        features.push({
                          __typename: "Stack",
                          items: []
                        } as PartialObjects["Stack"]);
                        mutateWholeObject();
                        setOpen(false);
                        console.log("beng 3");
                      }}
                    >
                      {t("ButtonStack")}
                    </ControlsButton>
                    <ControlsButton
                      onClick={() => {
                        features.push({
                          __typename: "ListBlock",
                          items: []
                        } as PartialObjects["ListBlock"]);
                        setOpen(false);
                        mutateWholeObject();
                      }}
                    >
                      {t("ButtonList")}
                    </ControlsButton>

                    <ControlsButton
                      onClick={() => {
                        features.push({
                          __typename: "TableBlock",
                          style: BuiltInStyles.NO_BORDERS_TABLE,
                          widths: [],
                          rows: []
                        } as PartialObjects["TableBlock"]);
                        setOpen(false);
                        mutateWholeObject();
                      }}
                    >
                      {/* //trzeba stworzyć nowy komponent VerticalTable
                    poniewaz teraz na podstawie jednego komponentu budowane są dwa komponenty? */}

                      {/* {ControlsComponentTxt.ButtonVerticalSplit} */}

                      {t("ButtonVerticalSplit")}
                    </ControlsButton>

                    <ControlsButton
                      onClick={() => {
                        features.push({
                          __typename: "TableBlock",
                          style: BuiltInStyles.LIGHT_BORDER_TABLE,
                          widths: [],
                          rows: []
                        } as PartialObjects["TableBlock"]);
                        setOpen(false);
                        mutateWholeObject();
                      }}
                    >
                      {t("ButtonTable")}
                    </ControlsButton>

                    <ControlsButton
                      onClick={() => {
                        features.push({
                          __typename: "TimeStamp"
                        } as PartialObjects["TimeStamp"]);
                        setOpen(false);
                        mutateWholeObject();
                      }}
                    >
                      {t("ButtonTimeStamp")}
                    </ControlsButton>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
