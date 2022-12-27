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
