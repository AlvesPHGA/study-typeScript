const inputNumber = document.querySelector('input');
const localStor = localStorage.getItem('total');

if (inputNumber && localStor) {
   inputNumber.value = localStor;
   outFront(Number(inputNumber.value));
}

function outFront(item: number) {
   const finalRes = document.querySelector('p');

   if (finalRes) {
      finalRes.innerText = `${item + 100 + item * 0.2}`;
   }
}

function operation() {
   if (inputNumber) {
      const convertToNumber = +inputNumber.value;
      localStorage.setItem('total', inputNumber.value);
      outFront(convertToNumber);
   }
}

if (inputNumber) inputNumber.addEventListener('keyup', operation);
