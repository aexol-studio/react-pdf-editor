import {MenuItemType, SmallInputMenuItem} from '../../topmenu/index'

export const TopIconFontSize: SmallInputMenuItem = {
  name: "fontSize",
  itemType: MenuItemType.SmallInput,
  change: (e: string) => ({ fontSize: e })
};