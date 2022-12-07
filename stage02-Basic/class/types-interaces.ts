// types and interface 1
const main = document.querySelector('main');

interface InterfaceProduct {
   name: string;
   price: number;
   details: boolean;
}

type TypeProduct = {
   name: string;
   price: number;
   details: boolean;
};

function fillData(data: InterfaceProduct) {
   if (main) {
      main.innerHTML += `
         <h2>${data.name}</h2>
         <p>R$ ${data.price}</p>
         <p>Detalhes: ${data.details ? 'Sim' : 'Não'}</p>
      `;
   }
}

// fillData({
//    name: 'laptop',
//    price: 1200,
//    details: true,
// });

// fillData({
//    name: 'computador',
//    price: 1900,
//    details: false,
// });

// Exercise
interface Product {
   nome: string;
   preco: number;
   descricao: string;
   garantia: string;
   seguroAcidentes: boolean;
}

async function notebook() {
   const res = await fetch('https://api.origamid.dev/json/notebook.json');
   const data = await res.json();

   showProduct(data);
}

notebook();

function showProduct(data: Product) {
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
