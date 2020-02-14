import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "../models";

export const justifyContentSpaceBetween: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content space-between",
  icon: "ArrowRightCircle",
  active: (style: ReactPDF.Style): boolean =>
    style.justifyContent === "space-between",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent:
      style.justifyContent === "space-between" ? undefined : "space-between"
  })
};
