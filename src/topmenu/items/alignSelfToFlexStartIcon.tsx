import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "../index";

export const alignSelfToFlexStartIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "ArrowUp",
  tooltip: "align self to flex-start",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "flex-start",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "flex-start" ? undefined : "flex-start"
  })
};
