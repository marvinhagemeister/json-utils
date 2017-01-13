export interface Object {
  __proto__?: any;
}

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
 * Merge two objects by copying the prototype. Use this
 * only on objects you have created yourself to prevent
 * hard to track down bugs!
 */
export function protoMerge(a: Object, b: Object): Object {
  b.__proto__ = a;
  return b;
}
