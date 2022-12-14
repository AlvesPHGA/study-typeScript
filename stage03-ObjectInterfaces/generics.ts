// Exemplo 01
function returnValue<T>(value: T): T {
   return value;
}

// Exemplo 02
const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fruitList = ['Amora', 'Pessego', 'Acerola', 'Maça', 'Mamão', 'Limão'];

function listArray<T>(list: T[]): T[] {
   return list.slice(0, 5);
}

// Exemplo 03
function notNull<T>(value: T) {
   if (value !== null) return value;
   else return null;
}

// Exemplo 04
function dataType<T>(data: T) {
   const returnData = {
      dado: data,
      type: typeof data,
   };

   return returnData;
}

// Exemplo 05 - extends

function extractText<E extends HTMLElement>(el: E) {
   return {
      text: el.innerHTML,
      el,
   };
}
const elemento = document.querySelector('a');
// if (elemento) console.log(extractText(elemento).el.href);

// Exemplo 06
async function getData<T>(url: string): Promise<T> {
   const res = await fetch(url);
   return await res.json();
}

interface Notebook {
   nome: string;
   preco: number;
}

async function handleData() {
   const note = await getData<Notebook>(
      'https://api.origamid.dev/json/notebook.json',
   );
   console.log(note.preco);
}

handleData();
