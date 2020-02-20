import { MenuItemType, SmallInputMenuItem } from "../models";


export const InputFontType: SmallInputMenuItem = {
  name: "fontFamily",
  itemType: MenuItemType.SmallInput,
  change: (e: string) => ({ fontFamily: e })
};

// dropdown lista