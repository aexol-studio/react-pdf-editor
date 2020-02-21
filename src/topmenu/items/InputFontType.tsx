import { MenuItemType, SelectInputItem } from "../models";


export const InputFontType: SelectInputItem = {
  name: "fontFamily",
  itemType: MenuItemType.SelectInput,
  change: (e: string) => ({ fontFamily: e })
};