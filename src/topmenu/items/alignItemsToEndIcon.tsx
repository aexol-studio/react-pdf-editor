import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "../index";

export const alignItemsToEndIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "align items to end",
  icon: "ArrowDownCircle",
  active: (style: ReactPDF.Style): boolean => style.alignItems === "flex-end",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignItems: style.alignItems === "flex-end" ? undefined : "flex-end"
  })
};
