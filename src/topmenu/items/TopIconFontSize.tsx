import { MenuItemType, IconMenuItem } from "../models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconFontSize: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Font Size",
  icon: "Type",
  change: (style: ReactPDF.Style) => ({ }),
  active: (style: ReactPDF.Style): boolean => false
};
