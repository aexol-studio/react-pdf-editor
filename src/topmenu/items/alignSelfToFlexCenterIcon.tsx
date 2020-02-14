import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "../models";

export const alignSelfToFlexCenterIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "Circle",
  tooltip: "align self to center",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "center",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "center" ? undefined : "center"
  })
};
