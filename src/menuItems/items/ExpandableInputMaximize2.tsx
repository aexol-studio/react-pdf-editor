import {MenuItemType, ExtendableInputMenuItem} from '../../topmenu/index'

export const ExpandableInputMaximize2: ExtendableInputMenuItem = {
  itemType: MenuItemType.ExtendableInput,
  v: { icon: "Maximize2", tooltip: "Margin" },
  values: [
    {
      icon: "ArrowUp",
      tooltip: "Margin top",
      name: "marginTop"
    },
    {
      icon: "ArrowRight",
      tooltip: "Margin right",
      name: "marginRight"
    },
    {
      icon: "ArrowDown",
      tooltip: "Margin bottom",
      name: "marginBottom"
    },
    {
      icon: "ArrowLeft",
      tooltip: "Margin Left",
      name: "marginLeft"
    }
  ]
};