import ReactPDF from "@react-pdf/renderer";
import { MenuItemType, IconMenuItem } from "@/topmenu/models";

export const alignSelfToFlexEndIcon: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  icon: "ArrowDown",
  tooltip: "align self to flex-end",
  active: (style: ReactPDF.Style): boolean => style.alignSelf === "flex-end",
  change: (style: ReactPDF.Style): ReactPDF.Style => ({
    alignSelf: style.alignSelf === "flex-end" ? undefined : "flex-end"
  })
};
