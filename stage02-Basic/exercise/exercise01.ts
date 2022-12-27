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

function isNumber(value: number | string) {
   if (typeof value === 'number') {
      return value;
   } else if (typeof value === 'string') {
      return Number(value);
   }
}

function valueUnionTypes(value: string) {
   const result = document.querySelector('.union__types__result');
   const resultClient = isNumber(value);
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
