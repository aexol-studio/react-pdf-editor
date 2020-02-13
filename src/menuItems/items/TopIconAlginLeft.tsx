import {MenuItemType, IconMenuItem} from '../../topmenu/index'
import ReactPDF from "@react-pdf/renderer";

export const TopIconAlginLeft: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text align left",
  icon: "AlignLeft",
  change: (style: ReactPDF.Style) => ({
    textAlign: style.textAlign === "left" ? undefined : "left"
  }),
  active: (style: ReactPDF.Style): boolean => style.textAlign === "left"
};