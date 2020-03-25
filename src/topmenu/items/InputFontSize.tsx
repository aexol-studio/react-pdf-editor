import { MenuItemType, SmallInputMenuItem } from "../models";

export const InputFontSize: SmallInputMenuItem = {
  name: "fontSize",
  itemType: MenuItemType.SmallInput,
  change: (e: string) => (
    {fontSize: e })
};