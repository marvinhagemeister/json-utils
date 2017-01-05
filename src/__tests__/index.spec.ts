import { assert as t } from "chai";
import { deepMerge, PlainJSON } from "../index";

describe("deepMerge", () => {
  it("should deeply merge plain objects", () => {
    const a: PlainJSON = {
      foo: {
        bar: "2",
        baz: 3,
        hello: {
          world: true,
        }
      },
      "@key": 2,
      arr: [1, 2],
      arr2: [1, 2],
      bar: {
        1: "asdf",
        2: "nope"
      },
      test: {},
      test2: false,
    };

    const b: PlainJSON = {
      foo: true,
      arr: [1, 3],
      bar: {
        1: "hello",
        3: "yo",
      },
      test: [1],
      test2: [2],
    };

    t.deepEqual(deepMerge(a, b), {
      "@key": 2,
      foo: true,
      arr: [1, 3],
      arr2: [1, 2],
      bar: {
        1: "hello",
        2: "nope",
        3: "yo",
      },
      test: [1],
      test2: [2],
    });
  });
});
