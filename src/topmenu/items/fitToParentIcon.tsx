import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "../index";

export const fitToParentIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "Move",
  tooltip: "Fit to parent",
  active: (style: ReactPDF.Style): boolean => style.width === "100%",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    width: style.width === "100%" ? undefined : "100%"
  })
};
