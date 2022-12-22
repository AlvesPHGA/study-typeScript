// Exemplo 01
function isString(value: unknown): value is string {
   return typeof value === 'string' ? true : false;
}

function rData(value: unknown) {
   if (isString(value)) console.log(value.toLowerCase());
}

// rData('HELLO');

// Exemplo 02
async function fetchProduct() {
   const res = await fetch('https://api.origamid.dev/json/cursos.json');
   const data = await res.json();

   handleProduct(data);
}

fetchProduct();

interface InfoCourse {
   nome: string;
   horas: number;
   aulas: number;
}

function isInfoCourse(value: unknown): value is InfoCourse {
   if (
      value &&
      typeof value === 'object' &&
      'nome' in value &&
      'horas' in value &&
      'aulas' in value
   ) {
      return true;
   } else {
      return false;
   }
}

function handleProduct(data: unknown) {
   if (isInfoCourse(data)) console.log(data);
}
