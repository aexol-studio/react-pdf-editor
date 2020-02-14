import { MenuItemType, IconMenuItem } from "../index";
import ReactPDF from "@react-pdf/renderer";

export const TopIconAlignRight: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text align right",
  icon: "AlignRight",
  change: (style: ReactPDF.Style) => ({
    textAlign: style.textAlign === "right" ? undefined : "right"
  }),
  active: (style: ReactPDF.Style): boolean => style.textAlign === "right"
};
