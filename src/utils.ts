import { PartialObjects } from "./graphql-zeus";
import { FrontendTypes } from "./frontend-types";

export const isTextBlock = (arg: any): arg is PartialObjects["TextBlock"] => {
  return arg.__typename === "TextBlock";
};
export const isColumns = (arg: any): arg is PartialObjects["Columns"] => {
  return arg.__typename === "Columns";
};
export const isColumn = (arg: any): arg is PartialObjects["Column"] => {
  return arg.__typename === "Column";
};
export const isStack = (arg: any): arg is PartialObjects["Stack"] => {
  return arg.__typename === "Stack";
};
export const isListBlock = (arg: any): arg is PartialObjects["ListBlock"] => {
  return arg.__typename === "ListBlock";
};
export const isTableBlock = (arg: any): arg is PartialObjects["TableBlock"] => {
  return arg.__typename === "TableBlock";
};
export const isImage = (arg: any): arg is PartialObjects["Image"] => {
  return arg.__typename === "Image";
};
export const isFeature = (arg: any): arg is PartialObjects["Feature"] => {
  return !!arg.__typename;
};
export const isTimeStamp = (arg: any): arg is PartialObjects["TimeStamp"] => {
  return arg.__typename === "TimeStamp";
};

export const downloadPDF = (name: string, pdf: string) => {
  const linkSource = pdf;
  const downloadLink = document.createElement("a");
  const fileName = `${name}.pdf`;

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};

export const ConvertFeatureToFrontendFeature = (f: any) =>
  f as PartialObjects["Feature"];
export const ConvertMachineDocumentToFrontendMachineDocument = (
  md: PartialObjects["MachineDocument"]
) => md as FrontendTypes["MachineDocument"];

export const swapInArray = function(
  array: any[],
  index1: number,
  index2: number
) {
  if (index1 <= array.length && index2 <= array.length) {
    var temp = array[index2];
    array[index2] = array[index1];
    array[index1] = temp;
  }
};
