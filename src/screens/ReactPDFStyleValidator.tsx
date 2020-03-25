import ReactPDF from "@react-pdf/renderer";

/**
 * If style does not validate replace incorrect values with undefined to keep the up running and throw console.error only
 */
export const ReactPDFStyleValidator = (
  style: ReactPDF.Style
): ReactPDF.Style => {
  const copyStyle: ReactPDF.Style = {...style};
  // rozpakowanie stylu

  
  const validateNumberValue = (v: string) => {
    const validatedNumber = parseFloat(v);
    if (!isNaN(validatedNumber)) {
      return v;
    }
    return undefined;
  };
  const numberKeys: Array<keyof ReactPDF.Style> = [
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderBottomWidth",
    "borderRadius",
    "borderRightWidth",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderTopWidth",
    "borderWidth",
    "bottom",
    "fontSize",
    "height",
    "left",
    "letterSpacing",
    "lineHeight",
    "margin",
    "marginBottom",
    "marginHorizontal",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginVertical",
    "maxHeight",
    "minHeight",
    "minWidth",
    "maxWidth",
    "opacity",
    "order",
    "padding",
    "paddingBottom",
    "paddingHorizontal",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingVertical",
    "right",
    "width"
  ];
  numberKeys.forEach(k => {
      if(!validateNumberValue(style[k])) {
          delete copyStyle[k];
        console.error(`Key "${k}" has the incorrect value`);
      }
  });

  return copyStyle;
};