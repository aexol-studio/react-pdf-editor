import ReactPDF from "@react-pdf/renderer";
import {MenuItemType, IconMenuItem} from '../../topmenu/index'

export const flexFlowRowIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "flex flow row",
  icon: "MoreHorizontal",
  active: (style: ReactPDF.Style): boolean => style.flexDirection === "row",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    flexDirection: style.flexDirection === "row" ? undefined : "row"
  })
}