import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "../index";

export const alignSelfToFlexStretchIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "Circle",
  tooltip: "align self to stretch",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "stretch",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "stretch" ? undefined : "stretch"
  })
};
