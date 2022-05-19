import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "@/topmenu/models";

export const justifyContentFlexStartIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content flex-start",
  icon: "ArrowLeftCircle",
  active: (style: ReactPDF.Style): boolean =>
    style.justifyContent === "flex-start",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent:
      style.justifyContent === "flex-start" ? undefined : "flex-start"
  })
};
