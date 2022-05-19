import { MenuItemType, IconMenuItem } from "@/topmenu/models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconAlignLeft: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text align left",
  icon: "AlignLeft",
  change: (style: ReactPDF.Style) => ({
    textAlign: style.textAlign === "left" ? undefined : "left"
  }),
  active: (style: ReactPDF.Style): boolean => style.textAlign === "left"
};
