import { MenuItemType, IconMenuItem } from "@/topmenu/models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconItalic: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Italic",
  icon: "Italic",
  change: (style: ReactPDF.Style) => ({
    fontStyle: style.fontStyle === "italic" ? undefined : "italic"
  }),
  active: (style: ReactPDF.Style): boolean => style.fontStyle === "italic"
};




