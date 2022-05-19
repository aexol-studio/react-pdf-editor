import { MenuItemType, IconMenuItem } from "@/topmenu/models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconFontSize: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Font Size",
  icon: "Type",
  change: (style: ReactPDF.Style) => ({
    fontWeight: style.fontWeight === "bold" ? undefined : "bold"
  }),
  active: (style: ReactPDF.Style): boolean => style.fontWeight === "bold"
};
