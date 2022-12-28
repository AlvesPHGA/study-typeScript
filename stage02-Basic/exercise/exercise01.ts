const inputUser = document.querySelector('input');
const totalLocal = localStorage.getItem('value');

if (inputUser && totalLocal) {
   inputUser.value = totalLocal;
   calculoGanho(Number(inputUser.value));
}

function calculoGanho(value: number) {
   const resultToClient = document.querySelector(
      '.annotation__inference__result',
   );

   if (resultToClient)
      resultToClient.innerHTML = `${value + 100 - value * 0.2}`;
}

function resToClient() {
   if (inputUser) {
      const inputValue = Number(inputUser.value);
      localStorage.setItem('value', inputUser.value);
      calculoGanho(inputValue);
   }
}

inputUser?.addEventListener('keyup', resToClient);

// Union Types
const formUnionTypes = document.querySelector('#formUnionTypes');

function isNumberUT(value: number | string) {
   if (typeof value === 'number') {
      return value;
   } else if (typeof value === 'string') {
      return Number(value);
   }
}

function valueUnionTypes(value: string) {
   const result = document.querySelector('.union__types__result');
   const resultClient = isNumberUT(value);
   console.log(resultClient);
}

function validUnionTypes() {
   const input = formUnionTypes?.querySelector('input');

   if (input) valueUnionTypes(input.value);
}

formUnionTypes?.addEventListener('submit', (e) => {
   e.preventDefault();
   validUnionTypes();
});

// Types & Interfaces
interface Company {
   nome: string;
   fundacao: number;
   pais: string;
}
interface DataProduct {
   nome: string;
   preco: number;
   descricao: string;
   garantia: string;
   seguroAcidentes: boolean;

   empresaFabricante: Company;
   empresaMontadora: Company;
}

async function fetchProduct02() {
   const res = await fetch('https://api.origamid.dev/json/notebook.json');
   const data = await res.json();

   handleProduct02(data);
}

fetchProduct02();

function handleProduct02(data: DataProduct) {
   const typesInterfaceContents = document.querySelector(
      '.types__interface__contents',
   );

   if (typesInterfaceContents)
      typesInterfaceContents.innerHTML += `
      <h3>${data.nome}</h3>
      <p>${data.descricao}</p>
      <p>${data.preco}</p>
   `;
}

interface DataCoursesArrays {
   nome: string;
   horas: number;
   aulas: number;
   gratuito: boolean;
   tags: string[];
   idAulas: number[];
   nivel: 'iniciante' | 'acancado';
}

async function fetchCoursesArray() {
   const res = await fetch('https://api.origamid.dev/json/cursos.json');
   const data = await res.json();

   coursesArrays(data);
}

fetchCoursesArray();

function coursesArrays(data: DataCoursesArrays[]) {
   const arrayContents = document.querySelector('.arrays');
   if (arrayContents) {
      data.forEach((dt) => {
         arrayContents.innerHTML += `
            <h3>${dt.nome}</h3>
            <p>${dt.horas} horas</p>
            <p>${dt.aulas} aulas</p>
         `;
      });
   }
}
