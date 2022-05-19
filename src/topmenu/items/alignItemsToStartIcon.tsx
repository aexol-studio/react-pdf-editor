import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "@/topmenu/models";

export const alignItemsToStartIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "align items to start",
  icon: "ArrowUpCircle",
  active: (style: ReactPDF.Style): boolean => style.alignItems === "flex-start",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignItems: style.alignItems === "flex-start" ? undefined : "flex-start"
  })
};
