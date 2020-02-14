import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "../models";

export const alignItemsToStretchIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "align items stretch",
  icon: "ArrowDownCircle",
  active: (style: ReactPDF.Style): boolean => style.alignItems === "stretch",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignItems: style.alignItems === "stretch" ? undefined : "stretch"
  })
};
