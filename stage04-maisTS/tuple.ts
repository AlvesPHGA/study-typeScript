// Example 01
const product011 = ['livro', 200];
const product012: [string, number] = ['alface', 23.4];

let info;

// if (typeof product011[0] === 'string') {
//    info = product011[0];
//    console.log(info.toUpperCase());
// }

// if (typeof product011[1] === 'number') {
//    info = product011[1];
//    console.log(info.toExponential());
// }

// product012.forEach((item) => {
//    if (typeof item === 'string') console.log(item.toUpperCase());
//    if (typeof item === 'number') console.log(item.toPrecision());
// });

// Example 02
function textElement(element: string) {
   const elementDom = document.querySelector<HTMLElement>(element);

   if (elementDom) {
      return [elementDom, elementDom.innerHTML] as const;
   } else {
      return null;
   }
}

const btnTuple = textElement('button');
// console.log(btnTuple?.[1].toUpperCase());
