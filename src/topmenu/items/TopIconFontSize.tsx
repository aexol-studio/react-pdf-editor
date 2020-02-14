import { MenuItemType, SmallInputMenuItem } from "../models";

export const TopIconFontSize: SmallInputMenuItem = {
  name: "fontSize",
  itemType: MenuItemType.SmallInput,
  change: (e: string) => ({ fontSize: e })
};
