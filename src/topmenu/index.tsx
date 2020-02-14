import React from "react";
import * as styles from "../components/styles/TopMenu";
// import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import "rc-color-picker/assets/index.css";
import ReactPDF from "@react-pdf/renderer";
import { PartialObjects } from "../graphql-zeus";
// import cx from "classnames";
import { DefaultValues } from "../constants";
import { SmallInput, TopIcon, ExpandableInput } from "./components";
import {
  ExpandableInputMaximize2,
  ExpandableInputMinimize2,
  ExpandableInputSquare,
  TopIconAlignCenter,
  TopIconAlignLeft,
  TopIconAlignRight,
  TopIconBold,
  TopIconFontSize,
  alignItemsToBaselineIcon,
  alignItemsToCenterIcon,
  alignItemsToEndIcon,
  alignItemsToStartIcon,
  alignItemsToStretchIcon,
  alignSelfToFlexBaselineIcon,
  alignSelfToFlexCenterIcon,
  alignSelfToFlexEndIcon,
  alignSelfToFlexStartIcon,
  alignSelfToFlexStretchIcon,
  fitToParentIcon,
  flexFlowColumnIcon,
  flexFlowRowIcon,
  justifyContentCenterIcon,
  justifyContentFlexEndIcon,
  justifyContentFlexStartIcon,
  justifyContentSpaceAround,
  justifyContentSpaceBetween,
  TopIconAlignJustify
} from "./items";
import {
  MenuItem,
  MenuItemType,
  ColorPickerMenuItem,
  ConditionalGroupMenuItem
} from "./models";

const ColorPicker = require("rc-color-picker");

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

// do tutaj

const common: MenuItem[] = [
  fitToParentIcon,
  ExpandableInputMaximize2,
  ExpandableInputMinimize2,
  ColorPicker,
  TopIconBold,
  TopIconAlignLeft,
  TopIconAlignCenter,
  TopIconAlignRight,
  TopIconAlignJustify,
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
      defaultColorPicker,
      TopIconBold,
      //tutaj dać top menu TypeFontSize
      TopIconFontSize,
      TopIconAlignLeft,
      TopIconAlignCenter,
      TopIconAlignRight,
      TopIconAlignJustify,
      defaultColorPicker,
      ExpandableInputSquare
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
      ExpandableInputMinimize2,
      ColorPicker,
      TopIconBold,
      TopIconFontSize, //do poprawy
      TopIconAlignLeft,
      TopIconAlignCenter,
      TopIconAlignRight,
      TopIconAlignJustify,
      defaultColorPicker,
      ExpandableInputSquare
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
            // <TopIcon tooltip={v.tooltip} icon={v.icon} onClick={() => {}} />
            <SmallInput
              value={valueOrDefault(item.name)}
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
  const featureConfig =
    (typename && configurations[typename]) || configurations.Start;
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
