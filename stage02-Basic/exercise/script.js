const inputNumber = document.querySelector('#total');
const finalRes = document.querySelector('.resultado');
const localStor = localStorage.getItem('total');

inputNumber.value = localStor;
outFront(inputNumber.value);

function outFront(item) {
   const res = item + 100 + item * 0.2;
   finalRes.innerHTML = res;
}

function operation() {
   const convertToNumber = +inputNumber.value;
   localStorage.setItem('total', convertToNumber);
   outFront(convertToNumber);
}

inputNumber.addEventListener('keyup', operation);
