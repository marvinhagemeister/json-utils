declare module "json-utils" {
  export type Value = PlainJSON | string | number | boolean;
  export interface PlainJSON {
    [key: string]: Value | Value[];
  }

  export function deepMerge(...sources: PlainJSON[]): PlainJSON;
}

