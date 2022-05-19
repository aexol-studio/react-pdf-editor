import { MenuItemType, SmallInputMenuItem } from "@/topmenu/models";

export const InputLineHeight: SmallInputMenuItem = {
  name: "lineHeight",
  itemType: MenuItemType.SmallInput,
  change: (e: string) => ({ lineHeight: e })
};
