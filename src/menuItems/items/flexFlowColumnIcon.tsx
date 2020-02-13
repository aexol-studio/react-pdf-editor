import ReactPDF from "@react-pdf/renderer";
import {MenuItemType, IconMenuItem} from '../../topmenu/index'

export const flexFlowColumnIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "flex flow column",
  icon: "MoreVertical",
  active: (style: ReactPDF.Style): boolean => style.flexDirection === "column",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    flexDirection: style.flexDirection === "column" ? undefined : "column"
  })
};