// An array is a type of data structure that stores elements of the same type in a ontiguous block of memory. 
// In an array, , of size, each memory location has some unique index.
//Reverse an array of integers.

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function reverseArray(a) {
    return a.reverse();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((arrTemp) => parseInt(arrTemp, 10));

    const res = reverseArray(arr);

    ws.write(res.join(" ") + "\n");

    ws.end();
}
