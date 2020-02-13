import ReactPDF from "@react-pdf/renderer";
import {MenuItemType, IconMenuItem} from '../../topmenu/index'

export const justifyContentCenterIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "justify content center",
  icon: "Circle",
  active: (style: ReactPDF.Style): boolean => style.justifyContent === "center",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    justifyContent: style.justifyContent === "center" ? undefined : "center"
  })
};