"use strict";
// example 01
let total = 200;
// example 02
function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    else {
        return false;
    }
}
// example 03
const btn = document.querySelector('button');
btn?.click();
// exercise 01
function toNumber(vlr) {
    if (typeof vlr === 'number') {
        return vlr;
    }
    else if (typeof vlr === 'string') {
        return +vlr;
    }
    else {
        throw 'função deve ser um number ou string';
    }
}
console.log(toNumber(20));
