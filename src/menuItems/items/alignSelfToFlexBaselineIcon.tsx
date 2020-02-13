import ReactPDF from "@react-pdf/renderer";
import {MenuItemType, IconMenuItem} from '../../topmenu/index'

export const alignSelfToFlexBaselineIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "Circle",
  tooltip: "align self to baseline",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "baseline",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "baseline" ? undefined : "baseline"
  })
};