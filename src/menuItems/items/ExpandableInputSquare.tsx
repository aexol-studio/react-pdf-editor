import {MenuItemType, ExtendableInputMenuItem} from '../../topmenu/index'

export const ExpandableInputSquare: ExtendableInputMenuItem = {
  itemType: MenuItemType.ExtendableInput,
  v: { icon: "Square", tooltip: "Border width" },
  values: [
    {
      icon: "ArrowUp",
      tooltip: "Border Top Width",
      name: "borderTopWidth"
    },
    {
      icon: "ArrowRight",
      tooltip: "Border Right Width",
      name: "borderRightWidth"
    },
    {
      icon: "ArrowDown",
      tooltip: "Border Down Width",
      name: "borderBottomWidth"
    },
    {
      icon: "ArrowLeft",
      tooltip: "Bottom Left Width",
      name: "borderLeftWidth"
    }
  ]
};