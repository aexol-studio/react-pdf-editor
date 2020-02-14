import ReactPDF from "@react-pdf/renderer";
import * as Icons from "react-feather";

export enum MenuItemType {
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

export interface IconMenuItem {
  itemType: MenuItemType.TopIcon;
  icon: keyof typeof Icons;
  tooltip: string;
  active: (style: ReactPDF.Style) => boolean;
  change: (style: ReactPDF.Style) => ReactPDF.Style;
}

//typ topIcon

export interface SmallInputMenuItem {
  itemType: MenuItemType.SmallInput;
  name: keyof ReactPDF.Style;
  change: (e: string) => ReactPDF.Style;
}

export interface ExtendableInputMenuItem {
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

export interface ColorPickerMenuItem {
  itemType: MenuItemType.ColorPicker;
}

export interface ConditionalGroupMenuItem {
  itemType: MenuItemType.ConditionalGroup;
  active: (style: ReactPDF.Style) => boolean;
  children: MenuItem[];
}

export type MenuItem =
  | IconMenuItem
  | SmallInputMenuItem
  | ExtendableInputMenuItem
  | ColorPickerMenuItem
  | ConditionalGroupMenuItem;
