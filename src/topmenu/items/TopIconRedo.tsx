import { MenuItemType, IconMenuItem } from "../models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconRedo: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Redo",
  icon: "ArrowRight",
  change: (style: ReactPDF.Style) => ({
    fontWeight: style.fontWeight === "bold" ? undefined : "bold"
  }),
  active: (style: ReactPDF.Style): boolean => style.fontWeight === "bold"
};
