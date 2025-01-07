/* eslint-disable absolute-imports/only-absolute-imports */
import type de from './messages/de.json';
import type en from './messages/en.json';

type MessagesEN = typeof en;
type MessagesDE = typeof de;

declare global {
  interface IntlMessagesEN extends MessagesEN {}
  interface IntlMessagesDE extends MessagesDE {}
}

declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.avif' {
  const value: string;
  export default value;
}

declare module 'dayClassName';
