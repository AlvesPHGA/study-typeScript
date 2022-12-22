"use strict";
// Exemplo 01
function isString(value) {
    return typeof value === 'string' ? true : false;
}
function rData(value) {
    if (isString(value))
        console.log(value.toLowerCase());
}
// rData('HELLO');
// Exemplo 02
async function fetchProduct() {
    const res = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await res.json();
    handleProduct(data);
}
fetchProduct();
function isInfoCourse(value) {
    if (value &&
        typeof value === 'object' &&
        'nome' in value &&
        'horas' in value &&
        'aulas' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduct(data) {
    if (isInfoCourse(data))
        console.log(data);
}
