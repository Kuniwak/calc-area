import * as ReadLine from "readline";
import * as Fs from "fs";


export interface LineReaderContract {
  read(): string[];
}


export class LineReader implements LineReaderContract {
  read(): string[] {
    const str = Fs.readFileSync("/dev/stdin", "utf-8").trim();
    const lines = str.split(/[\n\r]/);
    return lines
  }
}


export function readAndCalc(lineReader: LineReaderContract): string[] {
  const lines = lineReader.read();
  return lines.map(toNumber).map(calcArea).map((number) => String(number));
}


export function readAndCalcAndWrite(lineReader: LineReaderContract): string {
  return readAndCalc(lineReader).join("\n");
}


export function toNumber(line: string): number {
  return Number(line);
}


export function calcArea(radius: number): number {
  return Math.round(radius * radius * Math.PI);
};
