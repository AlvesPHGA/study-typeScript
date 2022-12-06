"use strict";
// types and interface 1
const main = document.querySelector('main');
function fillData(data) {
    if (main) {
        main.innerHTML += `
         <h2>${data.name}</h2>
         <p>R$ ${data.price}</p>
         <p>Detalhes: ${data.details ? 'Sim' : 'Não'}</p>
      `;
    }
}
fillData({
    name: 'laptop',
    price: 1200,
    details: true,
});
fillData({
    name: 'computador',
    price: 1900,
    details: false,
});
// Exercise
