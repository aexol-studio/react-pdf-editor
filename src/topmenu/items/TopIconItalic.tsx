import { MenuItemType, IconMenuItem } from "../models";
import ReactPDF from "@react-pdf/renderer";

export const TopIconItalic: IconMenuItem = {
  itemType: MenuItemType.TopIcon,
  tooltip: "Italic",
  icon: "Italic",
  change: (style: ReactPDF.Style) => ({
    fontStyle: style.fontStyle === "italic" ? undefined : "italic"
  }),
  active: (style: ReactPDF.Style): boolean => style.fontStyle === "italic"
};




// import { MenuItemType, IconMenuItemItalic } from "../models";
// import ReactPDF from "@react-pdf/renderer";

// export const TopIconItalic: IconMenuItemItalic = {
//   itemType: MenuItemType.TopIconItalic,
//   tooltip: "Italic",
//   icon: "Italic",
//   change: (fontStyle: ReactPDF.FontStyle) => ({
//     fontStyle: fontStyle === "italic" ? undefined : "italic"
//   }),
//   active: (fontStyle: ReactPDF.FontStyle): boolean => fontStyle === "italic"
// };



// export const TopIconItalic: IconMenuItemItalic = {
//   itemType: MenuItemType.TopIconItalic,
//   tooltip: "Italic",
//   icon: "Italic",
//   change: (style: ReactPDF.FontStyle) => ({
//     fontStyle: style === "italic" ? undefined : "italic"
//   }),
//   active: (style: ReactPDF.FontStyle): boolean => style === "italic"
// };
