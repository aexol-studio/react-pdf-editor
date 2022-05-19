import { MenuItemType, IconMenuItem } from "@/topmenu/models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconAlignJustify: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text align justify",
  icon: "AlignJustify",
  change: (style: ReactPDF.Style) => ({
    textAlign: style.textAlign === "justify" ? undefined : "justify"
  }),
  active: (style: ReactPDF.Style): boolean => style.textAlign === "justify"
};
