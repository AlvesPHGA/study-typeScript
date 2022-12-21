// Exemplo : Overload
function normalize(valor01: string): string;
function normalize(valor01: string[]): string[];
function normalize(valor01: string | string[]): string | string[] {
   return typeof valor01 === 'string' ? valor01.trim() : valor01.map((i) => i);
}

// console.log(normalize(' Jazi').toUpperCase());
// console.log(normalize(['Jazi', 'Jose']));

// Exercise
function formatNumber(valor: number): number;
function formatNumber(valor: string): string;
function formatNumber(valor: number | string): number | string {
   return typeof valor === 'number'
      ? Math.ceil(valor)
      : Math.ceil(+valor).toString();
}

console.log(formatNumber(5.7));
console.log(formatNumber('5.7'));
