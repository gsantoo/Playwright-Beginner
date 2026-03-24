"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseString(str) {
    return str.split('').reverse().join('');
}
function sortArray(arr) {
    return arr.sort(function (a, b) { return a - b; });
}
var original = "Hello, World!";
var reversed = reverseString(original);
console.log(reversed); // !dlroW ,olleH
var unsorted = [5, 2, 8, 1, 9, 3];
var sorted = sortArray(unsorted);
console.log(sorted); // [1, 2, 3, 5, 8, 9]
