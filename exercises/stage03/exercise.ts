// Instaceof
const origamidLink = document.getElementById('origamid');

if (origamidLink instanceof HTMLAnchorElement) {
   origamidLink.href = origamidLink.href.replace('http://', 'https://');
}

// Interfaces do DOM
const components = document.querySelectorAll('.link');

function changeColorFont(element: HTMLElement) {
   if (element instanceof HTMLAnchorElement) element.style.color = 'red';

   if (element instanceof HTMLButtonElement) {
      element.style.borderColor = 'blue';
      element.style.color = 'blue';
   }
}

components.forEach((component) => {
   if (component instanceof HTMLElement) changeColorFont(component);
});

// events & callbacks
const buttonEventsCallbacks = document.getElementById('buttonMenu');

const menuEventsCallbacks = document.querySelector('.eventsCallbacks__nav');

// function activeMenuEventsCallbacks() {
//    if (menuEventsCallbacks)
//       menuEventsCallbacks.classList.toggle('eventsCallbacks--active__menu');
// }

function handleEvent(event: PointerEvent) {
   const btn = event.currentTarget;

   if (btn instanceof HTMLElement && menuEventsCallbacks) {
      const active = menuEventsCallbacks.classList.contains(
         'eventsCallbacks--active__menu',
      );

      if (active) {
         menuEventsCallbacks.classList.remove('eventsCallbacks--active__menu');
         btn.setAttribute('aria-expanded', 'false');
         btn.setAttribute('aria-label', 'Abrir Menu');
      } else {
         menuEventsCallbacks.classList.add('eventsCallbacks--active__menu');
         btn.setAttribute('aria-expanded', 'true');
         btn.setAttribute('aria-label', 'Fechar Menu');
      }
   }
}

buttonEventsCallbacks?.addEventListener('pointerdown', handleEvent);

// Generics
const contentGenerics = document.querySelector('.generics__contents');

async function fetchProduct_G<T>(url: string): Promise<T> {
   const res = await fetch(url);
   return await res.json();
}

interface InfoProduct_G {
   nome: string;
   preco: number;
   descricao: string;
}

async function handleGenerics() {
   const data = await fetchProduct_G<InfoProduct_G>(
      'https://api.origamid.dev/json/notebook.json',
   );

   if (contentGenerics)
      contentGenerics.innerHTML = `
      <p>${data.nome}</p>
      <p>${data.preco}</p>
      <p>${data.descricao}</p>
   `;
}

handleGenerics();

// functions
const contentFunction = document.querySelector('.functions__content');

function template<T>(result: T) {
   if (contentFunction)
      contentFunction.innerHTML += `
      ${result}
   `;
}

function handleNumberString_F(data: number): number;
function handleNumberString_F(data: string): string;
function handleNumberString_F(data: number | string): number | string {
   let result;
   if (typeof data === 'number') {
      result = Math.ceil(data);
      template(result);
   } else {
      result = Math.ceil(Number(data));
      template(result);
   }

   return result;
}

handleNumberString_F('12.5');
handleNumberString_F(123.9);
