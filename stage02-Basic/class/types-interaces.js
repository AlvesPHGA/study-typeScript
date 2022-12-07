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
async function notebook() {
    const res = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await res.json();
    showProduct(data);
}
notebook();
function showProduct(data) {
    if (main)
        main.innerHTML = `
         <h2>Nome: ${data.nome}</h2>
         <ul>
            <li>Preço: ${data.preco}</li>
            <li>Descrição: ${data.descricao}</li>
            <li>Garantia: ${data.garantia}</li>
            <li>Seguro Acidente: ${data.seguroAcidentes ? 'Sim' : 'Não'}</li>
         </ul>
      `;
}
