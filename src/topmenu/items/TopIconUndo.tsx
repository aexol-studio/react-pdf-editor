import { MenuItemType, IconMenuItem } from "@/topmenu/models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconUndo: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Undo",
  icon: "ArrowLeft",
  change: (style: ReactPDF.Style) => ({
    fontWeight: style.fontWeight === "bold" ? undefined : "bold"
  }),
  active: (style: ReactPDF.Style): boolean => style.fontWeight === "bold"
};
