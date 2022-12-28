"use strict";
const inputUser = document.querySelector('input');
const totalLocal = localStorage.getItem('value');
if (inputUser && totalLocal) {
    inputUser.value = totalLocal;
    calculoGanho(Number(inputUser.value));
}
function calculoGanho(value) {
    const resultToClient = document.querySelector('.annotation__inference__result');
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
function isNumberUT(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
}
function valueUnionTypes(value) {
    const result = document.querySelector('.union__types__result');
    const resultClient = isNumberUT(value);
    console.log(resultClient);
}
function validUnionTypes() {
    const input = formUnionTypes?.querySelector('input');
    if (input)
        valueUnionTypes(input.value);
}
formUnionTypes?.addEventListener('submit', (e) => {
    e.preventDefault();
    validUnionTypes();
});
async function fetchProduct02() {
    const res = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await res.json();
    handleProduct02(data);
}
fetchProduct02();
function handleProduct02(data) {
    const typesInterfaceContents = document.querySelector('.types__interface__contents');
    if (typesInterfaceContents)
        typesInterfaceContents.innerHTML += `
      <h3>${data.nome}</h3>
      <p>${data.descricao}</p>
      <p>${data.preco}</p>
   `;
}
async function fetchCoursesArray() {
    const res = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await res.json();
    coursesArrays(data);
}
fetchCoursesArray();
function coursesArrays(data) {
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
