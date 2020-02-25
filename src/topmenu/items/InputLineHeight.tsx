import { MenuItemType, SmallInputMenuItem } from "../models";

export const InputLineHeight: SmallInputMenuItem = {
  name: "lineHeight",
  itemType: MenuItemType.SmallInput,
  change: (e: string) => ({ lineHeight: e })
};
