import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "@/topmenu/models";

export const alignItemsToBaselineIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "align items baseline",
  icon: "ArrowDownCircle",
  active: (style: ReactPDF.Style): boolean => style.alignItems === "baseline",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignItems: style.alignItems === "baseline" ? undefined : "baseline"
  })
};
