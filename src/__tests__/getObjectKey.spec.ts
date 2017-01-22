import { assert as t } from "chai";
import { getKeyByValue } from "../index";

describe("getKeyByValue", () => {
  it("should get key by value", () => {
    t.equal(getKeyByValue({ foo: "bar" }, "bar"), "foo");
    t.equal(getKeyByValue({ foo: "bar", baz: 1 }, 1), "baz");
  });
});
