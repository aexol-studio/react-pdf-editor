import {MenuItemType, IconMenuItem} from '../../topmenu/index'
import ReactPDF from "@react-pdf/renderer";

export const TopIconAlginCenter: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Text align center",
  icon: "AlignCenter",
  change: (style: ReactPDF.Style) => ({
    textAlign: style.textAlign === "center" ? undefined : "center"
  }),
  active: (style: ReactPDF.Style): boolean => style.textAlign === "center"
};