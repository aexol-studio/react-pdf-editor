import { MenuItemType, IconMenuItem } from "../models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconTextDecoration: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text decoration",
  icon: "Bold",
  change: (style: ReactPDF.Style) => ({
    textDecoration: style.textDecoration === "underline" ? undefined : "underline"
  }),
  active: (style: ReactPDF.Style): boolean => style.textDecoration === "underline"
};
