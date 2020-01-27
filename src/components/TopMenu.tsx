import React, { useState, useEffect } from "react";
import * as Icons from "react-feather";
import * as styles from "./styles/TopMenu";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import "rc-color-picker/assets/index.css";
import ReactPDF from "@react-pdf/renderer";
import { PartialObjects } from "../graphql-zeus";
import cx from "classnames";
import { DefaultValues } from "../constants";
const ColorPicker = require("rc-color-picker");

const TopIcon = ({
  icon,
  tooltip,
  onClick,
  active
}: {
  tooltip: string;
  icon: keyof typeof Icons;
  active?: boolean;
  onClick: () => void;
}) => {
  const Ico = Icons[icon];
  return (
    <Tooltip placement="top" trigger={"hover"} overlay={tooltip}>
      <div className={cx(styles.Button, { active })} onClick={onClick}>
        <Ico size={16} />
      </div>
    </Tooltip>
  );
};
const SmallInput = ({
  value,
  onChange
}: {
  value: string;
  onChange: (e: string) => void;
}) => {
  const [v, setV] = useState("0");
  useEffect(() => {
    setV(value);
  }, [value]);
  return (
    <div className={styles.Placement}>
      <input
        className={styles.Input}
        type="number"
        value={v}
        onChange={e => {
          setV(e.target.value);
        }}
        onBlur={() => {
          onChange(v);
        }}
      />
    </div>
  );
};

const ExpandableInput = ({
  v,
  values,
  applyStyle
}: {
  v: {
    tooltip: string;
    icon: keyof typeof Icons;
  };
  values: Array<{
    name: keyof ReactPDF.Style;
    tooltip: string;
    icon: keyof typeof Icons;
    v: string;
  }>;
  applyStyle: (css: ReactPDF.Style) => void;
}) => {
  const allSame = [...new Set(values.map(v => v.v))];
  const canBeShrinked = allSame.length === 1;
  const [expanded, setExpanded] = useState(false);
  if (!expanded && canBeShrinked) {
    return (
      <>
        <TopIcon
          tooltip="Expand"
          icon="ChevronRight"
          onClick={() => {
            setExpanded(true);
          }}
        />
        <TopIcon tooltip={v.tooltip} icon={v.icon} onClick={() => {}} />
        <SmallInput
          value={allSame[0]}
          onChange={e => {
            applyStyle(
              values.reduce<ReactPDF.Style>((a, b) => {
                a[b.name] = e;
                return a;
              }, {})
            );
          }}
        />
      </>
    );
  }
  return (
    <>
      {canBeShrinked && (
        <TopIcon
          tooltip="Collapse"
          icon="ChevronLeft"
          onClick={() => {
            setExpanded(false);
          }}
        />
      )}
      {values.map(v => (
        <>
          <TopIcon tooltip={v.tooltip} icon={v.icon} onClick={() => {}} />
          <SmallInput
            value={v.v}
            onChange={e => {
              applyStyle({
                [v.name]: e
              });
            }}
          />
        </>
      ))}
    </>
  );
};

export interface TopMenuProps {
  editedFeature?: PartialObjects["Feature"];
  onChange: () => void;
}
export const TopMenu = ({ editedFeature = {}, onChange }: TopMenuProps) => {
  const editedFeatureStyle: ReactPDF.Style = editedFeature.styleJson
    ? JSON.parse(editedFeature.styleJson)
    : {};
  const valueOrDefault = (name: keyof ReactPDF.Style) =>
    `${editedFeatureStyle[name] || DefaultValues[name]}`;
  const applyStyle = (css: ReactPDF.Style) => {
    editedFeature.styleJson = JSON.stringify({
      ...editedFeatureStyle,
      ...css
    });
    onChange();
  };
  return (
    <div className={styles.Main}>
      <TopIcon
        tooltip="fit to parent"
        icon="Move"
        active={editedFeatureStyle.width === "100%"}
        onClick={() =>
          applyStyle({
            width: editedFeatureStyle.width === "100%" ? undefined : "100%"
          })
        }
      />
      {editedFeature.__typename === "Stack" && (
        <>
          <TopIcon
            tooltip="flex flow row"
            icon="MoreHorizontal"
            active={editedFeatureStyle.flexDirection === "row"}
            onClick={() =>
              applyStyle({
                flexDirection:
                  editedFeatureStyle.flexDirection === "row" ? undefined : "row"
              })
            }
          />
          <TopIcon
            tooltip="flex flow column"
            icon="MoreVertical"
            active={editedFeatureStyle.flexDirection === "column"}
            onClick={() =>
              applyStyle({
                flexDirection:
                  editedFeatureStyle.flexDirection === "column"
                    ? undefined
                    : "column"
              })
            }
          />
          {editedFeatureStyle.flexDirection === "row" && (
            <>
              <TopIcon
                tooltip="justify content start"
                icon="ArrowLeftCircle"
                active={editedFeatureStyle.justifyContent === "flex-start"}
                onClick={() =>
                  applyStyle({
                    justifyContent:
                      editedFeatureStyle.justifyContent === "flex-start"
                        ? undefined
                        : "flex-start"
                  })
                }
              />
              <TopIcon
                tooltip="justify content center"
                icon="Circle"
                active={editedFeatureStyle.justifyContent === "center"}
                onClick={() =>
                  applyStyle({
                    justifyContent:
                      editedFeatureStyle.justifyContent === "center"
                        ? undefined
                        : "center"
                  })
                }
              />
              <TopIcon
                tooltip="justify content right"
                icon="ArrowRightCircle"
                active={editedFeatureStyle.justifyContent === "flex-end"}
                onClick={() =>
                  applyStyle({
                    justifyContent:
                      editedFeatureStyle.justifyContent === "flex-end"
                        ? undefined
                        : "flex-end"
                  })
                }
              />
              <TopIcon
                tooltip="align items to start"
                icon="ArrowUpCircle"
                active={editedFeatureStyle.alignItems === "flex-start"}
                onClick={() =>
                  applyStyle({
                    alignItems:
                      editedFeatureStyle.alignItems === "flex-start"
                        ? undefined
                        : "flex-start"
                  })
                }
              />
              <TopIcon
                tooltip="align items to center"
                icon="Circle"
                active={editedFeatureStyle.alignItems === "center"}
                onClick={() =>
                  applyStyle({
                    alignItems:
                      editedFeatureStyle.alignItems === "center"
                        ? undefined
                        : "center"
                  })
                }
              />
              <TopIcon
                tooltip="align items to end"
                icon="ArrowDownCircle"
                active={editedFeatureStyle.alignItems === "flex-end"}
                onClick={() =>
                  applyStyle({
                    alignItems:
                      editedFeatureStyle.alignItems === "flex-end"
                        ? undefined
                        : "flex-end"
                  })
                }
              />
            </>
          )}
        </>
      )}
      <ExpandableInput
        applyStyle={applyStyle}
        v={{
          icon: "Maximize2",
          tooltip: "Margines"
        }}
        values={[
          {
            icon: "ArrowUp",
            tooltip: "Margin top",
            v: valueOrDefault("marginTop"),
            name: "marginTop"
          },
          {
            icon: "ArrowRight",
            tooltip: "Margin right",
            v: valueOrDefault("marginRight"),
            name: "marginRight"
          },
          {
            icon: "ArrowDown",
            tooltip: "Margin bottom",
            v: valueOrDefault("marginBottom"),
            name: "marginBottom"
          },
          {
            icon: "ArrowLeft",
            tooltip: "Margin left",
            v: valueOrDefault("marginLeft"),
            name: "marginLeft"
          }
        ]}
      />

      <ExpandableInput
        applyStyle={applyStyle}
        v={{
          icon: "Minimize2",
          tooltip: "Padding"
        }}
        values={[
          {
            icon: "ArrowUp",
            tooltip: "Padding up",
            v: valueOrDefault("paddingTop"),
            name: "paddingTop"
          },
          {
            icon: "ArrowRight",
            tooltip: "Padding right",
            v: valueOrDefault("paddingRight"),
            name: "paddingRight"
          },
          {
            icon: "ArrowDown",
            tooltip: "Padding bottom",
            v: valueOrDefault("paddingBottom"),
            name: "paddingBottom"
          },
          {
            icon: "ArrowLeft",
            tooltip: "Padding left",
            v: valueOrDefault("paddingLeft"),
            name: "paddingLeft"
          }
        ]}
      />
      <div className={styles.Placement}>
        <ColorPicker
          className={styles.ColorPicker}
          color={editedFeatureStyle.color || "#000000"}
          onChange={({ color }: { color: string }) => {
            applyStyle({
              color
            });
          }}
        />
      </div>
      <TopIcon
        tooltip="Bold"
        icon="Bold"
        active={editedFeatureStyle.fontWeight === "bold"}
        onClick={() =>
          applyStyle({
            fontWeight:
              editedFeatureStyle.fontWeight === "bold" ? undefined : "bold"
          })
        }
      />
      <TopIcon tooltip="Font size" icon="Type" onClick={() => {}} />
      <SmallInput
        value={valueOrDefault("fontSize")}
        onChange={e => {
          applyStyle({
            fontSize: e
          });
        }}
      />
      <TopIcon
        tooltip="Text align left"
        icon="AlignLeft"
        active={editedFeatureStyle.textAlign === "left"}
        onClick={() =>
          applyStyle({
            textAlign:
              editedFeatureStyle.textAlign === "left" ? undefined : "left"
          })
        }
      />
      <TopIcon
        tooltip="Text align center"
        icon="AlignCenter"
        active={editedFeatureStyle.textAlign === "center"}
        onClick={() =>
          applyStyle({
            textAlign:
              editedFeatureStyle.textAlign === "center" ? undefined : "center"
          })
        }
      />
      <TopIcon
        tooltip="Text align right"
        icon="AlignRight"
        active={editedFeatureStyle.textAlign === "right"}
        onClick={() =>
          applyStyle({
            textAlign:
              editedFeatureStyle.textAlign === "right" ? undefined : "right"
          })
        }
      />
      <TopIcon
        tooltip="Text align justify"
        icon="AlignJustify"
        active={editedFeatureStyle.textAlign === "justify"}
        onClick={() =>
          applyStyle({
            textAlign:
              editedFeatureStyle.textAlign === "justify" ? undefined : "justify"
          })
        }
      />
      <div className={styles.Placement}>
        <ColorPicker
          className={styles.ColorPicker}
          color={editedFeatureStyle.backgroundColor || "#ffffff"}
          onChange={({ color }: { color: string }) => {
            applyStyle({
              backgroundColor: color
            });
          }}
        />
      </div>
      <ExpandableInput
        applyStyle={applyStyle}
        v={{
          icon: "Square",
          tooltip: "Border width"
        }}
        values={[
          {
            icon: "ArrowUp",
            tooltip: "Border Top Width",
            v: valueOrDefault("borderTopWidth"),
            name: "borderTopWidth"
          },
          {
            icon: "ArrowRight",
            tooltip: "Border Right Width",
            v: valueOrDefault("borderRightWidth"),
            name: "borderRightWidth"
          },
          {
            icon: "ArrowDown",
            tooltip: "Border Down Width",
            v: valueOrDefault("borderBottomWidth"),
            name: "borderBottomWidth"
          },
          {
            icon: "ArrowLeft",
            tooltip: "Border Left Width",
            v: valueOrDefault("borderLeftWidth"),
            name: "borderLeftWidth"
          }
        ]}
      />
      <div className={styles.Placement}>
        <ColorPicker
          className={styles.ColorPicker}
          color={editedFeatureStyle.borderColor || "#000000"}
          onChange={({ color }: { color: string }) => {
            applyStyle({
              borderColor: color
            });
          }}
        />
      </div>
    </div>
  );
};
