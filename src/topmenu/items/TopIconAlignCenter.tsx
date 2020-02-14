import { MenuItemType, IconMenuItem } from "../models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconAlignCenter: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text align center",
  icon: "AlignCenter",
  change: (style: ReactPDF.Style) => ({
    textAlign: style.textAlign === "center" ? undefined : "center"
  }),
  active: (style: ReactPDF.Style): boolean => style.textAlign === "center"
};
