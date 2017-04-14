"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const index_1 = require("./index");
describe("toNumber", () => {
    [
        {
            line: "0",
            expected: 0,
        },
        {
            line: "0.1",
            expected: 0.1,
        },
    ].forEach((testCase) => {
        const { line, expected } = testCase;
        context(`when given ${line}`, () => {
            it(`should return ${expected}`, () => {
                let actual = index_1.toNumber(line);
                assert.equal(actual, expected);
            });
        });
    });
});
