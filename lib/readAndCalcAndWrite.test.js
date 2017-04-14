"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const index_1 = require("./index");
class LineReaderStub {
    constructor(result) {
        this.result = result;
    }
    read() {
        return this.result;
    }
}
describe("readAndCalc", () => {
    [
        {
            input: [],
            expected: "",
        },
        {
            input: ["1", "10", "100"],
            expected: "3\n314\n31416",
        },
    ].forEach((testCase) => {
        const { input, expected } = testCase;
        context(`when given ${JSON.stringify(input)}`, () => {
            it(`should return ${JSON.stringify(expected)}`, () => {
                const stub = new LineReaderStub(input);
                const actual = index_1.readAndCalcAndWrite(stub);
                assert.deepEqual(actual, expected);
            });
        });
    });
});
