import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "../models";

export const justifyContentFlexEndIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content flex-end",
  icon: "ArrowRightCircle",
  active: (style: ReactPDF.Style): boolean =>
    style.justifyContent === "flex-end",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent: style.justifyContent === "flex-end" ? undefined : "flex-end"
  })
};
