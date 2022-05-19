import { MenuItemType, SelectInputItem } from "@/topmenu/models";


export const SelectFontType: SelectInputItem = {
  name: "fontFamily",
  itemType: MenuItemType.SelectInput,
  change: (e: string) => ({ fontFamily: e })
};