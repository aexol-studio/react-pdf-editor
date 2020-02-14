import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "../models";

export const justifyContentSpaceAround: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content space-around",
  icon: "ArrowRightCircle",
  active: (style: ReactPDF.Style): boolean =>
    style.justifyContent === "space-around",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent:
      style.justifyContent === "space-around" ? undefined : "space-around"
  })
};
