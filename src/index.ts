/** Deeply merge two objects */
export function deepMerge(...sources: Object[]): Object {
  const res = {};
  const len = sources.length;
  for (let i = 0; i < len; i++) {
    const source = sources[i];
    for (let prop in source) {
      if (prop in res
        && typeof res[prop] === "object" && typeof source[prop] === "object"
        && !Array.isArray(res[prop]) && !Array.isArray(source[prop])
      ) {
        res[prop] = deepMerge(res[prop], source[prop]);
      } else {
        res[prop] = source[prop];
      }
    }
  }

  return res;
};

/**
 * Shallow merge two objects by copying the prototype. Use this
 * only on objects you have created yourself to prevent
 * hard to track down bugs!
 */
export function protoMerge(a: any, b: any): any {
  b.__proto__ = a;
  return b;
}

/** Get object key by object value. Only works on shallow objects. */
export function getKeyByValue(obj: Object, value: number | string): string | undefined {
  for (let prop in obj) {
    if (obj[prop] === value) {
      return prop;
    }
  }
}
