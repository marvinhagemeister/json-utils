import { Suite } from "benchmark";
import { deepMerge } from "../src/index";
import merge = require("lodash.merge");

const suite = new Suite();

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
  }
};

const b = {
  foo: true,
  arr: [1, 3],
  bar: {
    1: "hello",
    3: "yo",
  }
};

// add tests
suite
  .add("custom", () => deepMerge(a, b))
  .add("lodash", () => merge(a, b))
  .on("cycle", (event: Event) => console.log(String(event.target)))
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
