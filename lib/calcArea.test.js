"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const index_1 = require("./index");
describe("calcArea", () => {
    [
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
    ].forEach((testCase) => {
        const { radius, expected } = testCase;
        context(`when given ${radius}`, () => {
            it(`should return ${expected}`, () => {
                let actual = index_1.calcArea(radius);
                assert.equal(actual, expected);
            });
        });
    });
});
