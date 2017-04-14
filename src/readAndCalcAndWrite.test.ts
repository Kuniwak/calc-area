import * as assert from "assert";
import { readAndCalcAndWrite, LineReaderContract } from "./index";


class LineReaderStub implements LineReaderContract {
  private result: string[]

  constructor(result: string[]) {
    this.result = result;
  }

  read() {
    return this.result;
  }
}



describe("readAndCalc", () => {
  interface TestCase {
    input: string[];
    expected: string[];
  }
  
  (<TestCase[]> [
    {
      input: [],
      expected: "",
    },
    {
      input: ["1", "10", "100"],
      expected: "3\n314\n31416",
    },
  ]).forEach((testCase) => {
    const { input, expected } = testCase;
  
    context(`when given ${JSON.stringify(input)}`, () => {
      it(`should return ${JSON.stringify(expected)}`, () => {
        const stub = new LineReaderStub(input);
        const actual = readAndCalcAndWrite(stub);
        assert.deepEqual(actual, expected);
      });
    });
  });
});
