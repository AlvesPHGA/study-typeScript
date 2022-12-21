"use strict";
function normalize(valor01) {
    return typeof valor01 === 'string' ? valor01.trim() : valor01.map((i) => i);
}
function formatNumber(valor) {
    return typeof valor === 'number'
        ? Math.ceil(valor)
        : Math.ceil(+valor).toString();
}
console.log(formatNumber(5.7));
console.log(formatNumber('5.7'));
