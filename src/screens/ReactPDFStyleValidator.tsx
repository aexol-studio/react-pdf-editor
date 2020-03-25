import ReactPDF from "@react-pdf/renderer";

/**
 * If style does not validate replace incorrect values with undefined to keep the up running and throw console.error only
 */
export const ReactPDFStyleValidator = (
  style: ReactPDF.Style
): ReactPDF.Style => {
  const copyStyle: ReactPDF.Style = {};
    // metoda copyStyle która trzyma ReactPDF.Style która jest w formie obiektu 
//     ReactPDF.Style = { paddingLeft?: number | string }
  const validateNumberValue = (v: string) => {
  	// zmiena  validateNumberValue pobiera string v z jakiego inputa i tworzy funkcję 
    const validatedNumber = parseFloat(v);
    	// która w zmiennej validatedNumber zwaraca przez parseFloat zawsze licze 
    
    if (!isNaN(validatedNumber)) {
    
    // jeśli zmienna validatedNumber jest NUMEREM bo jest negacja ! to zwraca tego stringa(NUMER)
    
      return v;

      // v jest Numerem
    }
    
   // inaczej wypierdala go jako NIEZNANY undefined
   
    return undefined;
  };
  
  
  // czu na górze była pierwsza walidacja 

// v w tuym momencie jest numerem bylo pobrane jak o input zmienione na numerek i zwrócone jako v przez returniaka
  
  
  const numberKeys: Array<keyof ReactPDF.Style> = [
  
  // zmienna co trzyma w sobie wszystkie dostępne style z ReactPDF w tablicy o nazwie numberKeys
  
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
  // dla każdego elementu tablicy numberKeys
  
if (style[k]) {
//   jeśli style(k) występuje to [co to kurwa za jebane gówno ]
			const v = validateNumberValue(style[k]);
  		// zmienna v będzie miała 
      if (v)
      // jeśli numer V po wstepnej walidacji występuje to k - które jest elementem 
      // tablicy np. paddingLeft i v które jest numrem. 



      {
        copyStyle[k] = v;

      // pusty obiekt React.Style
      // ostatenicze będzie wyglądal tak
      // "paddingLeft = 13 "

      } else {
      
        console.error(`Key "${k}" has the incorrect value`);
        // albo wykonsoluje błąd 

      }
    }
  });

  return copyStyle;

  // na koniec zostanie zwrócone copystyle co będzie wyglądało jak

  //copyStyle: ReactPDF.Style = {paddingLeft: 13};

  
};