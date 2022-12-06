// example 01
let total: string | number = 200;

// example 02
function isNumber(value: string | number) {
   if (typeof value === 'number') {
      return true;
   } else {
      return false;
   }
}

// example 03
const btn = document.querySelector('button');
btn?.click();

// exercise 01
function toNumber(vlr: number | string) {
   if (typeof vlr === 'number') {
      return vlr;
   } else if (typeof vlr === 'string') {
      return +vlr;
   } else {
      throw 'função deve ser um number ou string';
   }
}

console.log(toNumber(20));
