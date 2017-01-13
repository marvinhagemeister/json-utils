import { assert as t } from "chai";
import { protoMerge } from "../index";

describe("protoMerge", () => {
  it("should shallow merge two objects", () => {
    const a = {
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

    const b = {
      foo: true,
      arr: [1, 3],
      bar: {
        1: "hello",
        3: "yo",
      },
      test: [1],
      test2: [2],
    };

    const expected = {
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
    };

    const res = protoMerge(a, b);
    t.equal(res["@key"], 2);
    t.equal(res.foo, true);
    t.deepEqual(res.arr, [1, 3]);
    t.deepEqual(res.arr2, [1, 2]);
    t.deepEqual(res.test, [1]);
    t.deepEqual(res.test2, [2]);
  });
});
