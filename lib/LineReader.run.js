"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const reader = new index_1.LineReader();
console.log(JSON.stringify(reader.read()));
