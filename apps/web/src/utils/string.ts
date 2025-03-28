import { upperFirst } from "lodash";

export const formatTitle = (text: string): string => {
  return upperFirst(text);
};

export const addPrefix = (text: string, prefix: string = ">"): string => {
  return `${prefix} ${text}`;
};
