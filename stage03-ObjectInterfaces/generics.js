"use strict";
// Exemplo 01
function returnValue(value) {
    return value;
}
// Exemplo 02
const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fruitList = ['Amora', 'Pessego', 'Acerola', 'Maça', 'Mamão', 'Limão'];
function listArray(list) {
    return list.slice(0, 5);
}
// Exemplo 03
function notNull(value) {
    if (value !== null)
        return value;
    else
        return null;
}
// Exemplo 04
function dataType(data) {
    const returnData = {
        dado: data,
        type: typeof data,
    };
    return returnData;
}
// Exemplo 05 - extends
function extractText(el) {
    return {
        text: el.innerHTML,
        el,
    };
}
const elemento = document.querySelector('a');
// if (elemento) console.log(extractText(elemento).el.href);
// Exemplo 06
async function getData(url) {
    const res = await fetch(url);
    return await res.json();
}
async function handleData() {
    const note = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(note.preco);
}
handleData();
