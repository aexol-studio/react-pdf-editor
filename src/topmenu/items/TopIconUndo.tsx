import { MenuItemType, IconMenuItem } from "../models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconUndo: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Undo",
  icon: "ArrowLeft",
  change: (style: ReactPDF.Style) => ({ }),
  active: (style: ReactPDF.Style): boolean => false
};
