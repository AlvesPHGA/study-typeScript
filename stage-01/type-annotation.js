"use strict";
// @ts-check
const product = [
    {
        name: 'A lenda de Coss',
        tipo: 'livro',
    },
    {
        name: 'Mario',
        tipo: 'jogo',
    },
    {
        name: 'Senhor dos aneis',
        tipo: 'livro',
    },
];
function verify(data) {
    return data.filter((item) => item.tipo === 'livro');
}
console.log(verify(product));
