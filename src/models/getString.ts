import * as en from "./languages/en";
import * as pl from "./languages/pl";

export const Languages = {
  pl: (pl as unknown) as typeof en,
  en: (en as unknown) as typeof en
};

export const getString = <T extends keyof typeof Languages>(language: T) => <
  R extends keyof typeof Languages[T]
>(
  key: R
) => <S extends keyof typeof Languages[T][R]>(value: S) => {
  if (!Languages[language]) {
    throw new Error(`No such language ${language}`);
  }
  if (!Languages[language][key]) {
    throw new Error(
      `No such key ${key} in language ${language} - please implement it in models/languages/${language}.ts`
    );
  }
  if (!Languages[language][key][value]) {
    throw new Error(
      `No such value in language ${language} with key ${key} - please implement it in models/languages/${language}.ts`
    );
  }
  return Languages[language][key][value];
};
