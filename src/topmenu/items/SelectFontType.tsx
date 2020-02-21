import { MenuItemType, SelectInputItem } from "../models";


export const SelectFontType: SelectInputItem = {
  name: "fontFamily",
  itemType: MenuItemType.SelectInput,
  change: (e: string) => ({ fontFamily: e })
};