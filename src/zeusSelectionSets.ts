import { ZeusSelect, Style } from "./graphql-zeus";

export const StyleSelectionSet = ZeusSelect<Style>()({
  separator: true,
  alignment: true,
  background: true,
  bold: true,
  borderStyle: true,
  color: true,
  fontSize: true
})