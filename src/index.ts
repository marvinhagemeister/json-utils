export type Value = PlainJSON | string | number | boolean;
export interface PlainJSON {
  [key: string]: Value | Value[];
}

export function deepMerge(...sources: PlainJSON[]) {
  const res = {};
  const len = sources.length;
  for (let i = 0; i < len; i++) {
    const source = sources[i];
    for (let prop in source) {
      if (prop in res
        && typeof res[prop] === "object" && typeof source[prop] === "object"
        && !Array.isArray(res[prop]) && !Array.isArray(source[prop])
      ) {
        res[prop] = deepMerge(res[prop], source[prop] as PlainJSON);
      } else {
        res[prop] = source[prop];
      }
    }
  }

  return res;
};
