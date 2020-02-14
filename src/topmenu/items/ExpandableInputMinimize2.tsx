import { MenuItemType, ExtendableInputMenuItem } from "../models";

export const ExpandableInputMinimize2: ExtendableInputMenuItem = {
  itemType: MenuItemType.ExtendableInput,
  v: { icon: "Minimize2", tooltip: "Padding" },
  values: [
    {
      icon: "ArrowUp",
      tooltip: "Padding up",
      name: "paddingTop"
    },
    {
      icon: "ArrowRight",
      tooltip: "Padding right",
      name: "paddingRight"
    },
    {
      icon: "ArrowDown",
      tooltip: "Padding bottom",
      name: "paddingBottom"
    },
    {
      icon: "ArrowLeft",
      tooltip: "Padding Left",
      name: "paddingBottom"
    }
  ]
};
