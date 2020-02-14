import { MenuItemType, SmallInputMenuItem } from "../index";

export const TopIconFontSize: SmallInputMenuItem = {
  name: "fontSize",
  itemType: MenuItemType.SmallInput,
  change: (e: string) => ({ fontSize: e })
};
