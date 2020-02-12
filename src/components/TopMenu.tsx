import React, { useState, useEffect } from "react";
import * as Icons from "react-feather";
import * as styles from "../components/styles/TopMenu";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import "rc-color-picker/assets/index.css";
import ReactPDF from "@react-pdf/renderer";
import { PartialObjects } from "../graphql-zeus";
import cx from "classnames";
import { DefaultValues } from "../constants";
const ColorPicker = require("rc-color-picker");

enum MenuItemType {
  TopIcon = "TopIcon",
  SmallInput = "SmallInput",
  ExtendableInput = "ExtendableInput",
  ColorPicker = "ColorPicker",
  ConditionalGroup = "Group"
}

//typ interface IconMenu ktory wskazuje z czego powinno sie sklładać IconMenuItem
// itemType - pobiera typ ikon określonych w menuitemType -
// icon - iformuje iz musi sciagnać z (tego musze sie nauczyć keyof typeof) z ikon /react-father
// tooltip informajca o prosty string kory jest w propsach
// active - fukcja ktora przypisuje styl elementu przez active

interface IconMenuItem {
  itemType: MenuItemType.TopIcon;
  icon: keyof typeof Icons;
  tooltip: string;
  active: (style: ReactPDF.Style) => boolean;
  change: (style: ReactPDF.Style) => ReactPDF.Style;
}

//typ topIcon

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

//alginSelf

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

const alignSelfToFlexBaselineIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "Circle",
  tooltip: "align self to baseline",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "baseline",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "baseline" ? undefined : "baseline"
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

//justifyContent

const justifyContentFlexStartIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content flex-start",
  icon: "ArrowLeftCircle",
  active: (style: ReactPDF.Style): boolean =>
    style.justifyContent === "flex-start",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent:
      style.justifyContent === "flex-start" ? undefined : "flex-start"
  })
};

const justifyContentFlexEndIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content flex-end",
  icon: "ArrowRightCircle",
  active: (style: ReactPDF.Style): boolean =>
    style.justifyContent === "flex-end",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent: style.justifyContent === "flex-end" ? undefined : "flex-end"
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

const justifyContentSpaceBetween: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content space-between",
  icon: "ArrowRightCircle",
  active: (style: ReactPDF.Style): boolean =>
    style.justifyContent === "space-between",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent:
      style.justifyContent === "space-between" ? undefined : "space-between"
  })
};

const justifyContentSpaceAround: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content space-around",
  icon: "ArrowRightCircle",
  active: (style: ReactPDF.Style): boolean =>
    style.justifyContent === "space-around",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent:
      style.justifyContent === "space-around" ? undefined : "space-around"
  })
};

// alignItems

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

const alignItemsToBaselineIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "align items baseline",
  icon: "ArrowDownCircle",
  active: (style: ReactPDF.Style): boolean => style.alignItems === "baseline",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignItems: style.alignItems === "baseline" ? undefined : "baseline"
  })
};

const alignItemsToStretchIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "align items stretch",
  icon: "ArrowDownCircle",
  active: (style: ReactPDF.Style): boolean => style.alignItems === "stretch",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignItems: style.alignItems === "stretch" ? undefined : "stretch"
  })
};

const ExpandableInputMaximize2: ExtendableInputMenuItem = {
  itemType: MenuItemType.ExtendableInput,
  v: { icon: "Maximize2", tooltip: "Margin" },
  values: [
    {
      icon: "ArrowUp",
      tooltip: "Margin top",
      name: "marginTop"
    },
    {
      icon: "ArrowRight",
      tooltip: "Margin right",
      name: "marginRight"
    },
    {
      icon: "ArrowDown",
      tooltip: "Margin bottom",
      name: "marginBottom"
    },
    {
      icon: "ArrowLeft",
      tooltip: "Margin Left",
      name: "marginLeft"
    }
  ]
};

const ExpandableInputMinimize2: ExtendableInputMenuItem = {
  itemType: MenuItemType.ExtendableInput,
  v: { icon: "Minimize2", tooltip: "Padding" },
  values: [
    {
      icon: "ArrowUp",
      tooltip: "Padding up",
      name: "paddingTop"
    },
    {
      icon: "ArrowRight",
      tooltip: "Padding right",
      name: "paddingRight"
    },
    {
      icon: "ArrowDown",
      tooltip: "Padding bottom",
      name: "paddingBottom"
    },
    {
      icon: "ArrowLeft",
      tooltip: "Padding Left",
      name: "paddingBottom"
    }
  ]
};

const ExpandableInputSquare: ExtendableInputMenuItem = {
  itemType: MenuItemType.ExtendableInput,
  v: { icon: "Square", tooltip: "Border width" },
  values: [
    {
      icon: "ArrowUp",
      tooltip: "Border Top Width",
      name: "borderTopWidth"
    },
    {
      icon: "ArrowRight",
      tooltip: "Border Right Width",
      name: "borderRightWidth"
    },
    {
      icon: "ArrowDown",
      tooltip: "Border Down Width",
      name: "borderBottomWidth"
    },
    {
      icon: "ArrowLeft",
      tooltip: "Bottom Left Width",
      name: "borderLeftWidth"
    }
  ]
};

const TopIconFontSize: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "FontSize",
  icon: "Type",
  change: (style: ReactPDF.Style) => ({}),
  active: (style: ReactPDF.Style): boolean => style.fontWeight === "bold"

  //poprawić tutaj trzeba
};

const TopIconBold: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Bold",
  icon: "Bold",
  change: (style: ReactPDF.Style) => ({
    fontWeight: style.fontWeight === "bold" ? undefined : "bold"
  }),
  active: (style: ReactPDF.Style): boolean => style.fontWeight === "bold"
};

const TopIconAlginLeft: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text align left",
  icon: "AlignLeft",
  change: (style: ReactPDF.Style) => ({
    textAlign: style.textAlign === "left" ? undefined : "left"
  }),
  active: (style: ReactPDF.Style): boolean => style.textAlign === "left"
};

const TopIconAlginCenter: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text align center",
  icon: "AlignCenter",
  change: (style: ReactPDF.Style) => ({
    textAlign: style.textAlign === "center" ? undefined : "center"
  }),
  active: (style: ReactPDF.Style): boolean => style.textAlign === "center"
};

const TopIconAlginRight: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text align right",
  icon: "AlignRight",
  change: (style: ReactPDF.Style) => ({
    textAlign: style.textAlign === "right" ? undefined : "right"
  }),
  active: (style: ReactPDF.Style): boolean => style.textAlign === "right"
};

const TopIconAlginJustify: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text align justify",
  icon: "AlignJustify",
  change: (style: ReactPDF.Style) => ({
    textAlign: style.textAlign === "justify" ? undefined : "justify"
  }),
  active: (style: ReactPDF.Style): boolean => style.textAlign === "justify"
};

// ------- FLEX-WRAP --------

// const TopIconFlexWrapNowrap: IconMenuItem = {
//   itemType: MenuItemType.TopIcon,
//   tooltip: "Flex-Wrap nowrap",
//   icon: "Circle",
//   change: (style: ReactPDF.Style) => ({
//     flexWrap: style.flexWrap === "nowrap" ? undefined : "nowrap"
//   }),
//   active: (style: ReactPDF.Style): boolean => style.flexWrap === "nowrap"
// };

// const TopIconFlexWrapWrap: IconMenuItem = {
//   itemType: MenuItemType.TopIcon,
//   tooltip: "Flex-Wrap wrap",
//   icon: "Circle",
//   change: (style: ReactPDF.Style) => ({
//     flexWrap: style.flexWrap === "wrap" ? undefined : "wrap"
//   }),
//   active: (style: ReactPDF.Style): boolean => style.flexWrap === "wrap"
// };

// const TopIconFlexWrapWrapReverse: IconMenuItem = {
//   itemType: MenuItemType.TopIcon,
//   tooltip: "Flex-Wrap wrap-reverse",
//   icon: "Circle",
//   change: (style: ReactPDF.Style) => ({
//     flexWrap: style.flexWrap === "wrap-reverse" ? undefined : "wrap-reverse"
//   }),
//   active: (style: ReactPDF.Style): boolean => style.flexWrap === "wrap-reverse"
// };

const defaultColorPicker: ColorPickerMenuItem = {
  itemType: MenuItemType.ColorPicker
};

const flexDirectionRowJustifyConditionalGroup: ConditionalGroupMenuItem = {
  itemType: MenuItemType.ConditionalGroup,
  active: (style: ReactPDF.Style): boolean => style.flexDirection === "row",
  children: [
    //justtifyContent
    justifyContentFlexStartIcon,
    justifyContentFlexEndIcon,
    justifyContentCenterIcon,
    justifyContentSpaceBetween,
    justifyContentSpaceAround,
    //alginSelf
    alignSelfToFlexStartIcon,
    alignSelfToFlexEndIcon,
    alignSelfToFlexCenterIcon,
    alignSelfToFlexBaselineIcon,
    alignSelfToFlexStretchIcon,
    //alginIntems
    alignItemsToStartIcon,
    alignItemsToEndIcon,
    alignItemsToCenterIcon,
    alignItemsToBaselineIcon,
    alignItemsToStretchIcon
  ]
};

const flexDirectionColumnJustifyConditionalGroup: ConditionalGroupMenuItem = {
  itemType: MenuItemType.ConditionalGroup,
  active: (style: ReactPDF.Style): boolean => style.flexDirection === "column",
  children: [
    //justtifyContent
    justifyContentFlexStartIcon,
    justifyContentFlexEndIcon,
    justifyContentCenterIcon,
    justifyContentSpaceBetween,
    justifyContentSpaceAround,
    //alginSelf
    alignSelfToFlexStartIcon,
    alignSelfToFlexEndIcon,
    alignSelfToFlexCenterIcon,
    alignSelfToFlexBaselineIcon,
    alignSelfToFlexStretchIcon,
    //alginIntems
    alignItemsToStartIcon,
    alignItemsToEndIcon,
    alignItemsToCenterIcon,
    alignItemsToBaselineIcon,
    alignItemsToStretchIcon
  ]
};

const common: MenuItem[] = [
  fitToParentIcon,
  ExpandableInputMaximize2,
  ExpandableInputMinimize2,
  ColorPicker,
  TopIconBold,
  TopIconAlginLeft,
  TopIconAlginCenter,
  TopIconAlginRight,
  TopIconAlginJustify,
  ColorPicker,
  ExpandableInputSquare,
  ColorPicker
  //border width
];

const configurations: {
  [k in
    | "Start"
    | "TextBlock"
    | "Image"
    | "TableBlock"
    | "Columns"
    | "Stack"
    | "ListBlock"
    | "TimeStamp"]: ConditionalGroupMenuItem;
} = {
  Start: {
    itemType: MenuItemType.ConditionalGroup,
    active: (style: ReactPDF.Style) => true,
    children: [
      fitToParentIcon,
      ExpandableInputMaximize2,
      ExpandableInputMinimize2,
      TopIconAlginLeft,
      TopIconAlginCenter,
      TopIconAlginRight,
      TopIconAlginJustify,
    ]
  },
  // // chce aby od tego startował widok menu
  TextBlock: {
    itemType: MenuItemType.ConditionalGroup,
    active: (style: ReactPDF.Style) => true,
    children: common.concat([])
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
      flexDirectionRowJustifyConditionalGroup,
      flexDirectionColumnJustifyConditionalGroup,
      alignSelfToFlexStartIcon,
      alignSelfToFlexEndIcon,
      alignSelfToFlexCenterIcon,
      alignSelfToFlexStretchIcon,
      alignSelfToFlexBaselineIcon,
      ExpandableInputMaximize2,
      //expandGrup
      // marginTop
      // - number
      // marginRight
      // - number
      // marginBottom
      // -number
      // marginLeft
      // -number
      // margin

      ExpandableInputMinimize2,
      ColorPicker,
      TopIconBold,
      TopIconFontSize, //do poprawy

      TopIconAlginLeft,
      TopIconAlginCenter,
      TopIconAlginRight,
      TopIconAlginJustify,
      defaultColorPicker,
      // ColorPicker,
      ExpandableInputSquare

      // alignItemsToStartIcon,
      // alignItemsToCenterIcon,
      // alignItemsToEndIcon,
      // defaultColorPicker,
      // ColorPicker,
      //expadnBorder,
      //borderWidth,
      //colorPicker
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
  // tutaj coś trzeba chyba

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

export interface TopMenuProps {
  editedFeature?: PartialObjects["Feature"];
  onChange: () => void;
}
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
  const featureConfig = typename && configurations[typename] || configurations.Start;
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
