import * as assert from "assert";
import { calcArea, toNumber } from "./index";


describe("calcArea", () => {
  interface TestCase {
    radius: number;
    expected: number;
  }
  
  (<TestCase[]> [
    {
      radius: 0,
      expected: 0,
    },
    {
      radius: 1,
      expected: 3,
    },
    {
      radius: 10,
      expected: 314,
    },
    {
      radius: 100,
      expected: 31416,
    },
  ]).forEach((testCase) => {
    const {radius, expected} = testCase;
  
    context(`when given ${radius}`, () => {
      it(`should return ${expected}`, () => {
        let actual = calcArea(radius);
        assert.equal(actual, expected);
      });
    });
  });
});
