import { type useTranslations } from 'next-intl';

export type ObjectValues<T> = T[keyof T];
export type ObjectKeys<T> = {
  [K in keyof T]: K;
}[keyof T];

export type TFunctionT = ReturnType<typeof useTranslations>;
