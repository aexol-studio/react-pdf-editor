import { MenuItemType, SmallInputMenuItem } from "@/topmenu/models";

export const InputFontSize: SmallInputMenuItem = {
  name: "fontSize",
  itemType: MenuItemType.SmallInput,
  change: (e: string) => ({ fontSize: e })
};