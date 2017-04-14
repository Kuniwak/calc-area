import * as assert from "assert";
import { calcArea, toNumber } from "./index";


describe("toNumber", () => {
  interface TestCase {
    line: string;
    expected: number;
  }
  
  (<TestCase[]> [
    {
      line: "0",
      expected: 0,
    },
    {
      line: "0.1",
      expected: 0.1,
    },
  ]).forEach((testCase) => {
    const {line, expected} = testCase;
  
    context(`when given ${line}`, () => {
      it(`should return ${expected}`, () => {
        let actual = toNumber(line);
        assert.equal(actual, expected);
      });
    });
  });
});
