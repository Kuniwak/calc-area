"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fs = require("fs");
class LineReader {
    read() {
        const str = Fs.readFileSync("/dev/stdin", "utf-8").trim();
        const lines = str.split(/[\n\r]/);
        return lines;
    }
}
exports.LineReader = LineReader;
function readAndCalc(lineReader) {
    const lines = lineReader.read();
    return lines.map(toNumber).map(calcArea).map((number) => String(number));
}
exports.readAndCalc = readAndCalc;
function readAndCalcAndWrite(lineReader) {
    return readAndCalc(lineReader).join("\n");
}
exports.readAndCalcAndWrite = readAndCalcAndWrite;
function toNumber(line) {
    return Number(line);
}
exports.toNumber = toNumber;
function calcArea(radius) {
    return Math.round(radius * radius * Math.PI);
}
exports.calcArea = calcArea;
;
