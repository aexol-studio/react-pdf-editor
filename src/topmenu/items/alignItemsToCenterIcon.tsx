import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "@/topmenu/models";

export const alignItemsToCenterIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "align items to center",
  icon: "Circle",
  active: (style: ReactPDF.Style): boolean => style.alignItems === "center",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignItems: style.alignItems === "center" ? undefined : "center"
  })
};
