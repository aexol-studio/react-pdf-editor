import React, { useState, useEffect } from "react";
import * as styles from "../components/styles/TopMenu";
import * as Icons from "react-feather";
import ReactPDF from "@react-pdf/renderer";
import { TopMenuProps } from "../components/TopMenu";
import { DefaultValues } from "../constants";
import Tooltip from "rc-tooltip";
import cx from "classnames";
const ColorPicker = require("rc-color-picker");

enum MenuItemType {
  TopIcon = "TopIcon",
  SmallInput = "SmallInput",
  ExtendableInput = "ExtendableInput",
  ColorPicker = "ColorPicker",
  ConditionalGroup = "Group"
}

interface IconMenuItem {
  itemType: MenuItemType.TopIcon;
  icon: keyof typeof Icons;
  tooltip: string;
  active: (style: ReactPDF.Style) => boolean;
  change: (style: ReactPDF.Style) => ReactPDF.Style;
}

interface SmallInputMenuItem {
  itemType: MenuItemType.SmallInput;
  value: string;
  change: (e: string) => ReactPDF.Style;
}

interface ExtendableInputMenuItem {
  itemType: MenuItemType.ExtendableInput;
  v: {
    tooltip: string;
    icon: keyof typeof Icons;
  };
  values: Array<{
    name: keyof ReactPDF.Style;
    tooltip: string;
    icon: keyof typeof Icons;
  }>;
}

interface ColorPickerMenuItem {
  itemType: MenuItemType.ColorPicker;
}

interface ConditionalGroupMenuItem {
  itemType: MenuItemType.ConditionalGroup;
  active: (style: ReactPDF.Style) => boolean;
  children: MenuItem[];
}

type MenuItem =
  | IconMenuItem
  | SmallInputMenuItem
  | ExtendableInputMenuItem
  | ColorPickerMenuItem
  | ConditionalGroupMenuItem;

const fitToParentIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "Move",
  tooltip: "Fit to parent",
  active: (style: ReactPDF.Style): boolean => style.width === "100%",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    width: style.width === "100%" ? undefined : "100%"
  })
};

const flexFlowRowIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "flex flow row",
  icon: "MoreHorizontal",
  active: (style: ReactPDF.Style): boolean => style.flexDirection === "row",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    flexDirection: style.flexDirection === "row" ? undefined : "row"
  })
};

const flexFlowColumnIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "flex flow column",
  icon: "MoreVertical",
  active: (style: ReactPDF.Style): boolean => style.flexDirection === "column",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    flexDirection: style.flexDirection === "column" ? undefined : "column"
  })
};

const alignSelfToFlexStartIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "ArrowUp",
  tooltip: "align self to flex-start",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "flex-start",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "flex-start" ? undefined : "flex-start"
  })
};

const alignSelfToFlexEndIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "ArrowDown",
  tooltip: "align self to flex-end",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "flex-end",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "flex-end" ? undefined : "flex-end"
  })
};

const alignSelfToFlexCenterIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "Circle",
  tooltip: "align self to center",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "center",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "center" ? undefined : "center"
  })
};

const alignSelfToFlexStretchIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "Circle",
  tooltip: "align self to stretch",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "stretch",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "stretch" ? undefined : "stretch"
  })
};

const alignSelfToFlexBaselineIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "Circle",
  tooltip: "align self to baseline",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "baseline",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "baseline" ? undefined : "baseline"
  })
};

const justifyContentStartIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content start",
  icon: "ArrowLeftCircle",
  active: (style: ReactPDF.Style): boolean =>
    style.justifyContent === "flex-start",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent:
      style.justifyContent === "flex-start" ? undefined : "flex-start"
  })
};
const justifyContentCenterIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content center",
  icon: "Circle",
  active: (style: ReactPDF.Style): boolean => style.justifyContent === "center",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent: style.justifyContent === "center" ? undefined : "center"
  })
};

const justifyContentRightIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content right",
  icon: "ArrowRightCircle",
  active: (style: ReactPDF.Style): boolean =>
    style.justifyContent === "flex-end",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent: style.justifyContent === "flex-end" ? undefined : "flex-end"
  })
};

const flexDirectionRowJustifyConditionalGroup: ConditionalGroupMenuItem = {
  itemType: MenuItemType.ConditionalGroup,
  active: (style: ReactPDF.Style): boolean => style.flexDirection === "row",
  children: [
    justifyContentStartIcon,
    justifyContentCenterIcon,
    justifyContentRightIcon
  ]
};

const alignItemsToStartIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "align items to start",
  icon: "ArrowUpCircle",
  active: (style: ReactPDF.Style): boolean => style.alignItems === "flex-start",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignItems: style.alignItems === "flex-start" ? undefined : "flex-start"
  })
};

const alignItemsToCenterIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "align items to center",
  icon: "Circle",
  active: (style: ReactPDF.Style): boolean => style.alignItems === "center",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignItems: style.alignItems === "center" ? undefined : "center"
  })
};
const alignItemsToEndIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "align items to end",
  icon: "ArrowDownCircle",
  active: (style: ReactPDF.Style): boolean => style.alignItems === "flex-end",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignItems: style.alignItems === "flex-end" ? undefined : "flex-end"
  })
};

const defaultColorPicker: ColorPickerMenuItem = {
  itemType: MenuItemType.ColorPicker
};

const configurations: {
  [k in
    | "TextBlock"
    | "Image"
    | "TableBlock"
    | "Columns"
    | "Stack"
    | "ListBlock"
    | "TimeStamp"]: ConditionalGroupMenuItem;
} = {
  TextBlock: {
    itemType: MenuItemType.ConditionalGroup,
    active: (style: ReactPDF.Style) => true,
    children: [fitToParentIcon]
  },
  Image: {
    itemType: MenuItemType.ConditionalGroup,
    active: (style: ReactPDF.Style) => true,
    children: [fitToParentIcon]
  },
  TableBlock: {
    itemType: MenuItemType.ConditionalGroup,
    active: (style: ReactPDF.Style) => true,
    children: [fitToParentIcon]
  },
  Columns: {
    itemType: MenuItemType.ConditionalGroup,
    active: (style: ReactPDF.Style) => true,
    children: [fitToParentIcon]
  },
  Stack: {
    itemType: MenuItemType.ConditionalGroup,
    active: (style: ReactPDF.Style) => true,
    children: [
      fitToParentIcon,
      flexFlowRowIcon,
      flexFlowColumnIcon,
      alignSelfToFlexStartIcon,
      alignSelfToFlexEndIcon,
      alignSelfToFlexCenterIcon,
      alignSelfToFlexStretchIcon,
      alignSelfToFlexBaselineIcon,
      flexDirectionRowJustifyConditionalGroup,
      alignItemsToStartIcon,
      alignItemsToCenterIcon,
      alignItemsToEndIcon,
      defaultColorPicker
    ]
  },
  ListBlock: {
    itemType: MenuItemType.ConditionalGroup,
    active: (style: ReactPDF.Style) => true,
    children: [fitToParentIcon]
  },
  TimeStamp: {
    itemType: MenuItemType.ConditionalGroup,
    active: (style: ReactPDF.Style) => true,
    children: [fitToParentIcon]
  }
};

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

const ConditionalGroup: React.FunctionComponent<{
  active: boolean;
  style: ReactPDF.Style;
  applyStyle: (style: ReactPDF.Style) => void;
  items: MenuItem[];
}> = ({ active, style, applyStyle, items }) => {
  if (!active) {
    return null;
  }
  const valueOrDefault = (name: keyof ReactPDF.Style) =>
    `${style[name] || DefaultValues[name]}`;
  return (
    <>
      {items.map(item => {
        if (item.itemType === MenuItemType.TopIcon) {
          return (
            <TopIcon
              icon={item.icon}
              tooltip={item.tooltip}
              onClick={() => {
                applyStyle(item.change(style));
              }}
              active={item.active(style)}
            />
          );
        }
        if (item.itemType === MenuItemType.SmallInput) {
          return (
            <SmallInput
              value={item.value}
              onChange={e => applyStyle(item.change(e))}
            />
          );
        }
        if (item.itemType === MenuItemType.ExtendableInput) {
          return (
            <ExpandableInput
              applyStyle={applyStyle}
              v={item.v}
              values={item.values.map(v => ({
                ...v,
                v: valueOrDefault(v.name)
              }))}
            />
          );
        }
        if (item.itemType === MenuItemType.ColorPicker) {
          return (
            <ColorPicker
              className={styles.ColorPicker}
              color={style.color || "#000000"}
              onChange={({ color }: { color: string }) => {
                applyStyle({ color });
              }}
            />
          );
        }
        if (item.itemType === MenuItemType.ConditionalGroup) {
          return (
            <ConditionalGroup
              active={item.active(style)}
              style={style}
              items={item.children}
              applyStyle={applyStyle}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export const TopMenu = ({ editedFeature = {}, onChange }: TopMenuProps) => {
  const editedFeatureStyle: ReactPDF.Style = editedFeature.styleJson
    ? JSON.parse(editedFeature.styleJson)
    : {};
  const applyStyle = (css: ReactPDF.Style) => {
    editedFeature.styleJson = JSON.stringify({
      ...editedFeatureStyle,
      ...css
    });
    onChange();
  };
  const typename = editedFeature.__typename;
  const featureConfig = typename && configurations[typename];
  if (!featureConfig) {
    return null;
  }
  return (
    <div className={styles.Main}>
      <ConditionalGroup
        active={featureConfig.active(editedFeatureStyle)}
        items={featureConfig.children}
        applyStyle={applyStyle}
        style={editedFeatureStyle}
      />
    </div>
  );
};
