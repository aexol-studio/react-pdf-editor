import { MenuItemType, IconMenuItem } from "../index";
import ReactPDF from "@react-pdf/renderer";

export const TopIconBold: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Bold",
  icon: "Bold",
  change: (style: ReactPDF.Style) => ({
    fontWeight: style.fontWeight === "bold" ? undefined : "bold"
  }),
  active: (style: ReactPDF.Style): boolean => style.fontWeight === "bold"
};
